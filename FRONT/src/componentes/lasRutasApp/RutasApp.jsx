import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainApp from '../../pages/MainApp';
import MyServicesM from '../../pages/MyServices/MyServicesM';
import Services from '../../pages/Services/Services';
import ServicesId from '../../pages/Services/ServicesId';
import TaskList from '../../pages/TaskList';
import Solutioned from '../../pages/MyServices/Solutioned';
function RutasApp(){
    return (
    <Routes>
        <Route path={'/mainapp'} element={<MainApp />}/>
        <Route path={'/myservices'} element={<MyServicesM />}/>
        <Route path={'/services'} element={<Services />}/>
        <Route path={'/services/:id'} element={<ServicesId />} />
        <Route path={'/tasklist'} element={<TaskList />} />
        <Route path={'/myservicessolutioned'} element={<Solutioned />} />
    </Routes>
    )
}

export default RutasApp;
