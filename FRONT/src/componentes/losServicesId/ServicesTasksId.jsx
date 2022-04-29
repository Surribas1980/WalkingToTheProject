import React,{useState} from "react";
import ServicesTasksTaskId from "./ServicesTasksTaskId";

function ServicesTasksId(props){
    let ele = props.taskId;
    let salida2 = ele.map((item,index)=>{
      return(<>{item.titulo} {item.descripcion} {item.usuario} {item.tasks}</>)
    })
    let salida = ele.map((item,index)=>{


        return(
        <>
<<<<<<< HEAD
            <div name="service-titulo">{item.titulo}</div>
            <div name="service-description">{item.descripcion}</div>
            <div name="service-usuario">{item.usuario}</div>

        </>)
    })
    console.log('estoy en ServicesTasksId salida:',salida,ele.tasks,'- salida2:',salida2)
=======
            <span name="service-titulo">Título: {item.titulo}</span>
            <span name="service-description">Descripción: {item.descripcion}</span>
            <span name="service-usuario">Usuario: {item.usuario}</span>
         
        </>)
    })
    
>>>>>>> cf6ebabc526ea6bbaae74f6804d7807dfe8a44fa
    return (
    <div id="services-task-id">
        {salida}
        <ServicesTasksTaskId task={props.taskId[0].tasks}/>
    </div>);
}

export default ServicesTasksId;
