import React from 'react';
import Contenido from '../componentes/Contenido';
import Titulo from '../componentes/Titulo';
import HeaderApp from '../componentes/HeaderApp';
function Usuarios() {
  const usus = [
    {
      numero: 1,
      nombre: 'Julian',
      id: 300,
      nombreAvatar: 'Lucas3',
      logo: 'guapo',
    },
    {
      numero: 2,
      nombre: 'Manolo',
      id: 259,
      nombreAvatar: 'Lucas',
      logo: 'guapo',
    },
    {
      numero: 3,
      nombre: 'David',
      id: 9,
      nombreAvatar: 'Lucas1',
      logo: 'guapo',
    },
  ];

  return (
    <>
      <HeaderApp />
      <div className="divFlex flexDirectionColumn">
        <div className="ocultarTitulos divFlex border alignCenter">
          <Titulo listanombre={usus} />
        </div>
        <div className="border">
          <Contenido listanombre={usus} />
        </div>
      </div>
    </>
  );
}

export default Usuarios;
