import React from 'react';

function Boton(props) {
  let laPropFuncion = props.elEstado;
  const laFuncion = () => {
    laPropFuncion(false);
    console.log('en el boton: ', laPropFuncion);
  };

  return (
    <button
      onClick={laFuncion}
      className="padding10 divFlex flexDirectionRow justifyContentCenter alignWithFlexItemCenter width20vw fondoAzulete px20 theSlabRoboto rounding10"
    >
      <div>Cerrar</div>
    </button>
  );
}

export default Boton;
