/** */
import React, { useState } from 'react';
import ContenidoElemento from './ContenidoElemento';
import ContenidoElementoClick from './ContenidoElementoClick';

function Contenido(props) {
  const [ver, setVer] = useState(false);
  const [verUsuario, setverUsuario] = useState();
  const lista = props.listanombre;
  
  const titulos = Object.keys(props.listanombre[0]);
  const valorestitulos = { numero: 'numero', id: 'id', nombre: 'nombre' };
  const titulosQuePaso = titulos.filter((tit) => {
    let condicion =
      tit === valorestitulos.numero ||
      tit === valorestitulos.id ||
      tit === valorestitulos.nombre;
    return condicion ?? tit;
  }, valorestitulos);

  const funcion = (index) => {
    setVer(!ver);
    setverUsuario(index);
  };
  const valores = lista?.map((elemento, index) => {
    let unarray = Object.values(elemento);
    let elementosPasados = [elemento.id, elemento.nombreAvatar, elemento.logo];
    return (
      <>
        <div className="divFlex" key={index}>
          <ContenidoElemento
            elindex={index}
            lafuncion={funcion}
            elementos={unarray}
          />
        </div>
        {ver && verUsuario === index && (
          <div className="divFlex">
            <ContenidoElementoClick valores={titulosQuePaso} />
            <ContenidoElementoClick valores={elementosPasados} />
          </div>
        )}
      </>
    );
  });

  return valores;
}

export default Contenido;
