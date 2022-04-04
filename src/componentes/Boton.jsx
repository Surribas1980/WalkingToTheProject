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
      className="divFlex flexDirectionRow justifyContentCenter alignWithFlexItemCenter buttonGeneric fondoAzulete px20 theSlabRoboto rounding10"
    >
      <div>Cerrar</div>
    </button>
  );
}

export default Boton;
