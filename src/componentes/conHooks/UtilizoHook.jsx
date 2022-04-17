import React from 'react';
import { Routes, Route } from 'react-router-dom';

/*import Usuarios from '../../pages/Usuarios';*/
import MainApp from '../../pages/MainApp';
import useAuth from '../../shared/hooks/useAuth';

export default function UtilizoHook({ children }) {
  const { user } = useAuth('');
  return (
    <>
      {user === 'logeado' ? (

        <Routes>
          <Route path={'/mainapp'} element={<MainApp />}></Route>
        </Routes>
      ) : (
        children
      )}
    </>
  );
}
