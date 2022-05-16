import React,{useState} from 'react';
import { Routes, Route } from 'react-router-dom';

import {ObjRutas} from './Function-Array-Pages';

function RutasApp(){

  const [objAddress,setObjAddress] = useState(ObjRutas());

    return (
    <Routes>

        <Route path={objAddress.servicios.path} element={objAddress.servicios.page}/>
        <Route path={objAddress.serviciosId.path} element={objAddress.serviciosId.page}>
            <Route path={objAddress.serviciosId.conversacion.path} element={objAddress.serviciosId.conversacion.page} />
        </Route>
        <Route path={objAddress.main.path} element={objAddress.main.page}/>
        <Route path={objAddress.taskList.path} element={objAddress.taskList.page} />
        <Route path={objAddress.myServicesId.path} element={objAddress.myServicesId.page} />
    </Routes>
    )
}

export default RutasApp;
