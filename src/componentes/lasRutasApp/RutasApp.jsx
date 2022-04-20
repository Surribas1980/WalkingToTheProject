import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainApp from '../../pages/MainApp';
import MyServicesM from '../../pages/MyServices/MyServicesM';
import Services from '../../pages/Services/Services';

function RutasApp(){
    return (
    <Routes>
        <Route path={'/mainapp'} element={<MainApp />}/>
        <Route path={'/myservices'} element={<MyServicesM />}/>
        <Route path={'/services'} element={<Services />}/>
    </Routes>
    )
}

export default RutasApp;