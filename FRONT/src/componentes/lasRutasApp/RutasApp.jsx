import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainApp from '../../pages/MainApp';
import MyServicesM from '../../pages/MyServices/MyServicesM';
import Services from '../../pages/Services/Services';
import TaskList from '../../pages/TaskList';

function RutasApp(){
    return (
    <Routes>
        <Route path={'/mainapp'} element={<MainApp />}/>
        <Route path={'/myservices'} element={<MyServicesM />}/>
        <Route path={'/services'} element={<Services />}/>
        <Route path={'/tasklist'} element={<TaskList />} />
    </Routes>
    )
}

export default RutasApp;