import React, { useState, useEffect } from 'react';
import { getDirVistoError } from '../data.js';
import Boton from './Boton.jsx';

function ElPopUp(props) {
  const [dirImgs, setDirImg] = useState(getDirVistoError());
  const [otroArray1, setOtroArray1] = useState([]);
  const [imagen1, setImagen1] = useState();
  const [numero, setNumero] = useState(0);
  const [message, setMessage] = useState('');
  useEffect(() => {
    const laPeticion = () => {
      dirImgs?.map((item) => {
        fetch(item)
          .then((dato1) => {
            let loQueViene1 = dato1.blob();
            return loQueViene1;
          })
          .then((elBlob1) => {
            let objectURL1 = URL.createObjectURL(elBlob1);
            setImagen1(objectURL1);
            otroArray1.push(objectURL1);
          });
      });
    };
    laPeticion();
  }, []);

  useEffect(() => {
    const eleccion = () => {
      if (props.respuestaBack) {
        setNumero(0); /**true */
        setMessage('You have registed correctly');
      } else {
        setNumero(1); /**false */
        setMessage('You have not registed correctly');
      }
    };
    eleccion();
    console.log('el array: ', otroArray1);
  }, [props.respuestaBack]);

  return (
    <div className="vh100  posicionRelativa topNegativeToTest zIndexTest1 fondoVerde">
      <div className="testlenght vh50 abigwidhtpx  fondoNaranja posicionAbsoluta topPositiveToTest zIndexTest1">
        {<img src={otroArray1[numero]} width="100" height="100" />}
        <div>{message}</div>

        <Boton elEstado={props.elEstado} />
      </div>
    </div>
  );
}

export default ElPopUp;
