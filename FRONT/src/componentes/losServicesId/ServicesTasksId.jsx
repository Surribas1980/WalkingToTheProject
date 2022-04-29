import React,{useState} from "react";
import ServicesTasksTaskId from "./ServicesTasksTaskId";

function ServicesTasksId(props){
    let ele = props.taskId;

    let salida = ele.map((item,index)=>{
        

        return(
        <>
            <span name="service-titulo">Título: {item.titulo}</span>
            <span name="service-description">Descripción: {item.descripcion}</span>
            <span name="service-usuario">Usuario: {item.usuario}</span>
         
        </>)
    })
    
    return (
    <div id="services-task-id">
        {salida}
        <ServicesTasksTaskId task={props.taskId[0].tasks}/>
    </div>);
}

export default ServicesTasksId;