import React from 'react';

function Titulo(props) {
  const titulos = Object.keys(props.listanombre[0]);

  const losTitulos = titulos?.map((titulo, index) => {
    return (
      <div className="enlinea anchura border margen " key={index}>
        {titulo}
      </div>
    );
  });
  return <>{losTitulos}</>;
}

export default Titulo;
