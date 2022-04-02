import React from 'react';
import useAuth from '../shared/hooks/useAuth';

export default function HeaderApp({ children }) {
  const { logOut } = useAuth();
  return (
    <>
      <button
        onClick={() => {
          logOut();
        }}
      >
        Salir
      </button>
    </>
  );
}
