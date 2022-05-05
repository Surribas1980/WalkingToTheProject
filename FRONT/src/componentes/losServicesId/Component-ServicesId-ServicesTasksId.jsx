import React,{useState} from "react";
import Component_ServicesId_ServicesTasksId_ServicesTasksTaskId from "./Component-ServicesId-ServicesTasksTaskId";
import Component_ServicesId_ServicesTasksId_ServicesFilesTasksId from "./Component-ServicesId-ServicesFilesTasksId";
import SendMessageWithIcon from "../SendMessageWithIcon";
function Component_ServicesId_ServicesTasksTaskId(props){
    let ele = props.taskId;
    console.log(ele[0]?.solutioned,ele)
    let salida = props.taskId?.map((item,index)=>{


        return(
        <>
            <span name="service-titulo">Título: {item.titulo}</span>
            <span name="service-description">Descripción: {item.descripcion}</span>
            <span name="service-usuario">Usuario: {item.usuario}</span>

        </>)
    })

    return (

    <div>

        <div id="services-task-id">
            {salida}
            <div name="titulo-lista-tareas">Tareas</div>
            <Component_ServicesId_ServicesTasksId_ServicesTasksTaskId task={props.taskId[0].tasks}/>

            <Component_ServicesId_ServicesTasksId_ServicesFilesTasksId ficheros={props.taskId[0].files}/>

            <SendMessageWithIcon solutioned = {ele[0]?.solutioned} conversation = {ele[0]?.conversation} />

        </div>
        <div>

        </div>
    </div>
    );
}

export default Component_ServicesId_ServicesTasksTaskId;