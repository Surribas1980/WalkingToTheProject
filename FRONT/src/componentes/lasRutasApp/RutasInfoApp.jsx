import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MyServicesM from '../../pages/MyServices/MyServicesM';

function RutasInfoApp(){
  return(
    <>
      <Routes>
        <Route path={'/ma'} element={<MyServicesM}/>
        <Route />
        <Route />
      </Routes>
    </>)
}

export default RutasInfoApp;
