import React,{useState} from "react";
import ServicesTasksTaskId from "./ServicesTasksTaskId";
import ServicesFilesTasksId from "./ServicesFilesTasksId";
import SendMessageWithIcon from "../SendMessageWithIcon";
function ServicesTasksId(props){
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
            <ServicesTasksTaskId task={props.taskId[0].tasks}/>

            <ServicesFilesTasksId ficheros={props.taskId[0].files}/>

            <SendMessageWithIcon solutioned = {ele[0]?.solutioned} conversation = {ele[0]?.conversation} />

        </div>
        <div>

        </div>
    </div>
    );
}

export default ServicesTasksId;
