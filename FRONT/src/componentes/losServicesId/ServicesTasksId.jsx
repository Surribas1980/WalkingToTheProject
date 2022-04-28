import React,{useState} from "react";

function ServicesTasksId(props){
    let ele = props.taskId;

    let salida = ele.map((item,index)=>{
        

        return(
        <>
            <div name="service-titulo">{item.titulo}</div>
            <div name="service-description">{item.descripcion}</div>
            <div name="service-usuario">{item.usuario}</div>
         
        </>)
    })
    console.log('estoy en ServicesTasksId salida:',salida,ele.tasks)
    return (
    <div id="services-tasks-id">
        {salida}
    </div>);
}

export default ServicesTasksId;