import React , { useState } from "react";
import GenericBoton from "../GenericBoton";

function Component_TaskList_SendList(props){

    const onSend = () =>{
        console.log('Envio datos: ',JSON.stringify(props.list));
    }

    return (
    <>
        <GenericBoton styleDiv='send-data-div' id='send-data' newFunction={onSend} estilo='send-data'/>
    </>
    )
}

export default Component_TaskList_SendList;
