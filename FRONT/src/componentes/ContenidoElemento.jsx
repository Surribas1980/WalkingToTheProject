import React, { useState } from 'react';

function ContenidoElemento(props) {
  const valor = props.elementos;
  const estiloSinOcultar = 'anchura border margen alignCenter fondoNaranja';
  const estiloOcultando =
    'anchura border margen alignCenter fondoVerde ocultarTitulos';
  let estilo;
  let salida = valor?.map((val, index) => {
    if (index === 0 || index === 1 || index === 2) {
      estilo = estiloOcultando;
    } else {
      estilo = estiloSinOcultar;
    }
    return (
      <>
        <div
          className={estilo}
          onClick={() => {
            props.lafuncion(props.elindex);
          }}
        >
          {val}
        </div>
      </>
    );
  });

  return <> {salida}</>;
}

export default ContenidoElemento;
