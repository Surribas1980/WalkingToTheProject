import MainApp from '../../pages/MainApp';
import Page_MyServices from '../../pages/Services/MyServices/Page-MyServices';
import Page_MyServicesId from '../../pages/Services/MyServices/Page-MyServicesId';
import Page_Services from '../../pages/Services/Page-Services';
import Page_ServicesId from '../../pages/Services/Page-ServicesId';
import Page_TaskList from '../../pages/Page-TaskList';
import Page_Personal_Conversation_Id from '../../pages/Services/Page-Personal.Conversation';
import GenericFormTextArea from '../GenericFormTextArea';

let dir = {
        servicios: {
          path: '/services',
          page: <Page_Services />
        },
        serviciosId: {
          path: '/services/:id',
          page: <Page_ServicesId />,
          conversacion: {
            path: 'conversation/:idUsuario',
            componente: <GenericFormTextArea idDivForm="generic-form-text-area" />,
            page: <Page_Personal_Conversation_Id dato={<GenericFormTextArea idDivForm="generic-form-text-area" />} />
          }
        },
        main: {
          path: '/mainapp',
          page: <MainApp />
        },
        taskList: {
          path: '/tasklist',
          page: <Page_TaskList />
        },
        myServicesId:{
          path:'/myservices/:id',
          page: <Page_MyServicesId />,
        }
}

export function ObjRutas(){
  return dir;
}
