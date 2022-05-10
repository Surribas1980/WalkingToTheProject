import React,{useState} from 'react';
import Component_ServicesId_Conversations_PersonalConversationsId from '../../../componentes/losServicesId/Conversations/PersonalConversationsId/Component-ServicesId-Conversations-PersonalConversationsId';
import Component_Services_ShowServices from '../../../componentes/losServices/Component-Services-ShowServices.jsx'

import { getConversacionesServicioId } from '../../../data.js';
import Component_Personal_ConversationsId_Iframe from '../../../componentes/losServicesId/Conversations/PersonalConversationsId/Component-Personal-ConversationsId-Iframe';


function Auxiliary_Page_ServiceId_Conversations(props){
  const [serviciosId,setServicioId] = useState(getConversacionesServicioId())

  let losServiciosId = serviciosId?.filter((item)=>{
    return (item.id === props.elId);
  })
console.log('Auxiliary_Page_ServiceId_Conversations: ',serviciosId,losServiciosId,props.elId)

  return(
    <>
      <Component_ServicesId_Conversations_PersonalConversationsId>

        <Component_Personal_ConversationsId_Iframe elservicio={props.elId} usuarios={losServiciosId}/>
        {/*<Component_Services_ShowServices goTo="services" styleShowServices="services-solutionados" usuarios={losServiciosId}/>*/}
      </Component_ServicesId_Conversations_PersonalConversationsId>
    </>)
}

export default Auxiliary_Page_ServiceId_Conversations;
