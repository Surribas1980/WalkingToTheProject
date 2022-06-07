import React,{useState} from "react";

/*--- Components ---*/
import Component_ServicesId_ServicesTasksId_ServicesTasksTaskId from "./Component-ServicesId-ServicesTasksTaskId";
import Component_ServicesId_ServicesTasksId_ServicesFilesTasksId from "./Component-ServicesId-ServicesFilesTasksId";
import Component_ServicesId_Conversations from "./Conversations/Component-ServicesId-Conversations";
import GenericFormTextArea from "../GenericFormTextArea";
import Auxiliary_Page_ServiceId_Solved_Or_SendSolution from "../../pages/Services/ServicesId-Solved-Or-SendSolution/Auxiliary-Page-ServiceId-Solved-Or-SendSolution";
import Component_ServicesId_ConversationsId from './Conversations/Component-ServicesId-ConversationsId';
import SendMessageWithIcon from "../SendMessageWithIcon";


/*--- endpoints ---*/
import { endpoints } from '../../http/endpoints';
import { method } from '../../http/method';
/*--- helpers ---*/
import {settingsFunction} from '../../helpers/misHelpers';
/*--- api ---*/
import { envioDatos } from '../../http/api';
/*--Not necessary--*/
import {getPersonalConversationsId} from '../../data.js';


function Component_ServicesId_ServicesTasksTaskId(props){
    const [conversationId,setConversationId] = useState(getPersonalConversationsId());
    const [settings,setSettings] = useState();
    const [ele,setId] = useState(props.taskId)
    //let ele = props.taskId;



    const lasConversationsIdOrdenadas = conversationId?.filter((item)=>{
      return ele[0]?.id == item.id;
    }).sort((idbbddn0,idbbddn1)=>{
      return idbbddn0.idbbdd > idbbddn1.idbbdd });
    console.log('lasConversationsIdOrdenadas: ',lasConversationsIdOrdenadas,'.. ele[0]?.id: ',ele[0]?.id,ele[0]?.solved,ele,'props: ',props,'props.data: ',props.data)

    let enviarSolution =
            <div className="solution">
                <Auxiliary_Page_ServiceId_Solved_Or_SendSolution id={ele[0]?.id} solved = {ele[0]?.solved} solution = {ele[0]?.solution} />
            </div>
     ;
    let personalConversations = <div className="solution">
    <Component_ServicesId_Conversations >
        <Component_ServicesId_ConversationsId ConversationsId={lasConversationsIdOrdenadas} />
    </Component_ServicesId_Conversations>
    <GenericFormTextArea settingsSendFunction={envioDatos} method={method.post} id={ele[0]?.id} endpoint={endpoints.insertComentarioPersonalService} idDivForm="generic-form-text-area"/>
</div>;

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

            <Component_ServicesId_ServicesTasksId_ServicesTasksTaskId task={props.taskId[0].tasks}/>
            <Component_ServicesId_ServicesTasksId_ServicesFilesTasksId ficheros={props.taskId[0].files}/>
            <SendMessageWithIcon conversas={<Component_ServicesId_ConversationsId ConversationsId={lasConversationsIdOrdenadas} />} solved = {ele[0]?.solved} conversation = {ele[0]?.conversation} />
            {props.visualizo === true ? props.data : ''}

        </div>
        <div className="services-task-id-solution-conversation">

            {props.visualizo === true ? '' : enviarSolution}
            {personalConversations}
            <div className="conversation-total">

                <Component_ServicesId_Conversations dato={<GenericFormTextArea id={ele[0]?.id} settingsSendFunction={envioDatos} method={method.post} endpoint={endpoints.insertComentarioColectiveService} idDivForm="generic-form-text-area"/>}>
                    <Component_ServicesId_ConversationsId ConversationsId={lasConversationsIdOrdenadas} />
                </Component_ServicesId_Conversations>
            </div>
        </div>
    </div>
    );
}

export default Component_ServicesId_ServicesTasksTaskId;
