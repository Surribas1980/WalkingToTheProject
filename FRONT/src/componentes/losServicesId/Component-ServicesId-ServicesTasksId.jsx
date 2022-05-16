import React,{useState,useEffect} from "react";
import Component_ServicesId_ServicesTasksId_ServicesTasksTaskId from "./Component-ServicesId-ServicesTasksTaskId";
import Component_ServicesId_ServicesTasksId_ServicesFilesTasksId from "./Component-ServicesId-ServicesFilesTasksId";
import SendMessageWithIcon from "../SendMessageWithIcon";
import Component_ServicesId_Conversations from "./Conversations/Component-ServicesId-Conversations";
import GenericFormTextArea from "../GenericFormTextArea";
import Component_ServicesId_Conversations_ColectiveConversationsId from "./Conversations/ColectiveConversationsId/Component-ServicesId-Conversations-ColectiveConversationsId";
import Page_Services from "../../pages/Services/Page-Services";
import Auxiliary_Page_ServiceId_Conversations from '../../pages/Services/ServicesId-Conversations/Auxiliary_Page_ServiceId_Conversations-Page-Conversations-Of-MyServiceId';
import Auxiliary_Page_ServiceId_Solved_Or_SendSolution from "../../pages/Services/ServicesId-Solved-Or-SendSolution/Auxiliary-Page-ServiceId-Solved-Or-SendSolution";
import Component_ServicesId_SolutionsId from './Solutions/Component-ServicesId-Solutions.jsx';
function Component_ServicesId_ServicesTasksTaskId(props){
  const [visualizo,setVisu] = useState(false);
    let ele = props.taskId;
    console.log(ele[0]?.id,ele[0]?.solved,ele,'props: ',props,'props.data: ',props.data)
    let misServe;
    if(props.data === "misserviciosid"){

       setVisu(true)


       console.log('estoy en donde quiero: ', misServe)
    }else{
      misServe = '';
    }

    let salida = props.taskId?.map((item,index)=>{



        return(
        <>
            <span name="service-titulo">Título: {item.titulo}</span>
            <span name="service-description">Descripción: {item.descripcion}</span>
            <span name="service-usuario">Usuario: {item.usuario}</span>

        </>)
    })

    return (

    <div id="organized-services-task-id">

        <div id="services-task-id">
            {salida}
            <div name="titulo-lista-tareas">Tareas</div>
             <Component_ServicesId_SolutionsId />
            <Component_ServicesId_ServicesTasksId_ServicesTasksTaskId task={props.taskId[0].tasks}/>

            <Component_ServicesId_ServicesTasksId_ServicesFilesTasksId ficheros={props.taskId[0].files}/>

            <SendMessageWithIcon solved = {ele[0]?.solved} conversation = {ele[0]?.conversation} />
            {visualizo === true ? <Component_ServicesId_SolutionsId /> : ''}
        </div>
        <div className="services-task-id-solution-conversation">
            <div className="solution">
                <Auxiliary_Page_ServiceId_Solved_Or_SendSolution solved = {ele[0]?.solved} solution = {ele[0]?.solution} />
            </div>
            <div className="solution">
                <Component_ServicesId_Conversations >
                    <Auxiliary_Page_ServiceId_Conversations elId={ele[0]?.id} />
                </Component_ServicesId_Conversations>
            </div>
            <div className="conversation-total">

                <Component_ServicesId_Conversations dato={<GenericFormTextArea idDivForm="generic-form-text-area"/>}>
                    <Component_ServicesId_Conversations_ColectiveConversationsId />
                    <Component_ServicesId_Conversations_ColectiveConversationsId />
                    <Component_ServicesId_Conversations_ColectiveConversationsId />
                    <Component_ServicesId_Conversations_ColectiveConversationsId />
                    <Component_ServicesId_Conversations_ColectiveConversationsId />
                    <Component_ServicesId_Conversations_ColectiveConversationsId />

                </Component_ServicesId_Conversations>
            </div>
        </div>
    </div>
    );
}

export default Component_ServicesId_ServicesTasksTaskId;
