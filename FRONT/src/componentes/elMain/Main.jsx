import React, { useState, useEffect } from 'react';
import { getDireccionesImagenes } from '../../data.js';
import DosSeccion from '../lasSecciones/DosSeccion.jsx';
import TresSeccion from '../lasSecciones/TresSeccion.jsx';
import UnaSeccion from '../lasSecciones/UnaSeccion.jsx';
import {Element , animateScroll as scroll} from 'react-scroll';
import GenericBoton from '../GenericBoton.jsx';
export default function Main() {
  const [imagen, setImagen] = useState([]);
  let [contador, setContador] = useState(0);
  const [arrayImagenes, setArrayImagenes] = useState(getDireccionesImagenes());
  const [otroArray, setOtroArray] = useState([]);

  const Up = ()=>{
    scroll.scrollToTop();
  }
  useEffect(() => {
    const imagen = () => {
      arrayImagenes?.map((item) => {
        fetch(item)
          .then((dato) => {
            let loQueViene = dato.blob();
            return loQueViene;
          })
          .then((elBlob) => {
            let objectURL = URL.createObjectURL(elBlob);
            setImagen(objectURL);
            otroArray.push(objectURL);
            /*console.log('el otroArray en Main: ', otroArray);*/
          });
      });
    };
    imagen();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      let cuenta = contador + 1;
      setContador(cuenta);

      if (cuenta === arrayImagenes.length) {
        setContador(0);
      } else {
        setContador(cuenta);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [contador]);

  //let styleButtom = "borderNone width5vw-change7 fondoAzulete toBottom0 posicionAbsoluta zIndexTest2";

  return (
    <div>

      <Element name="seccion-1">

        <UnaSeccion>
          {<img className='img-portada' src={otroArray[contador]} />}
        </UnaSeccion>
      </Element>
      <Element name="seccion-2">
        <DosSeccion></DosSeccion>

      </Element>
      <Element name="seccion-3">

        <TresSeccion>

        </TresSeccion>
      {/*<GenericBoton newFunction={Up} estilo={styleButtom} newForm={'boton from Main'}></GenericBoton>*/}
      </Element>
    </div>
  );
}
