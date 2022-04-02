import React from 'react';

function Boton(props) {
  let laPropFuncion = props.elEstado;
  const laFuncion = () => {
    laPropFuncion(false);
    console.log('en el boton: ', laPropFuncion);
  };

  return <button onClick={laFuncion}>Cerrar Boton</button>;
}

export default Boton;
