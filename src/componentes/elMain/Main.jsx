import React, { useState, useEffect } from 'react';
import { getDireccionesImagenes } from '../../data.js';
export default function Main() {
  const [imagen, setImagen] = useState([]);
  let [contador, setContador] = useState(0);
  const [arrayImagenes, setArrayImagenes] = useState(getDireccionesImagenes());
  const [otroArray, setOtroArray] = useState([]);

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

  return <>{<img width="200" height="200" src={otroArray[contador]} />}</>;
}
