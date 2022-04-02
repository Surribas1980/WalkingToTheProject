import React, { useState } from 'react';

function ContenidoElementoClick(props) {
  let salida = props.valores.map((elementos, index) => {
    return <div>{elementos}</div>;
  });

  return (
    <div className="ocultarDatos divFlex flexDirectionColumn ">
      <div className="anchura border margen alignCenter ">
        <div className="divFlex justifyContentSpaceAround ">
          <div className="fondoVerde">{salida}</div>
        </div>
      </div>
    </div>
  );
}

export default ContenidoElementoClick;
