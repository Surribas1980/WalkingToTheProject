import React from 'react';
import useAuth from '../shared/hooks/useAuth';
import Salir from '../images/menu/salida.png';
export default function HeaderApp({ children }) {
  const { logOut } = useAuth();
  console.log('el children: ',children)
  return (
    <div id="navegation-main-app">
      <img src={Salir} className="tamanio" id='img-header-default'
        onClick={() => {
          logOut();
        }}
      />


      <div>{children}</div>
    </div>
  );
}
