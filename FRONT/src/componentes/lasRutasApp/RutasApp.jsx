import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainApp from '../../pages/MainApp';
{/*import MyServicesM from '../../pages/MyServices/MyServicesM';*/}
import Page_Services from '../../pages/Services/Page-Services';
import Page_ServicesId from '../../pages/Services/Page-ServicesId';
import Page_TaskList from '../../pages/Page-TaskList';
import Page_Personal_Conversation_Id from '../../pages/Services/Page-Personal.Conversation';
import GenericFormTextArea from '../GenericFormTextArea';
{/*import Solutioned from '../../pages/MyServices/Solutioned';*/}
function RutasApp(){
    return (
    <Routes>
        <Route path={'/mainapp'} element={<MainApp />}/>
        {/*<Route path={'/myservices'} element={<MyServicesM />}/>*/}
        <Route path={'/services'} element={<Page_Services />}/>
        <Route path={'/services/:id'} element={<Page_ServicesId />}>
            <Route path={'conversation/:idUsuario'} element={<Page_Personal_Conversation_Id dato={<GenericFormTextArea idDivForm="generic-form-text-area" />} />} />
        </Route>
        {/*<Route path={'/services/:id'} element={<Page_ServicesId />} />
        <Route path={'/services/:id/conversation/:idUsuario'} element={<Page_Personal_Conversation_Id />} />*/}
        <Route path={'/tasklist'} element={<Page_TaskList />} />
        {/*<Route path={'/myservicessolutioned'} element={<Solutioned />} />*/}
    </Routes>
    )
}

export default RutasApp;
