import React , { useState } from "react";
import GenericBoton from "../GenericBoton";

function SendList(){
    
    const onSend = () =>{
        console.log('Envio datos: ',JSON.stringify());
    }

    return (
    <>    
        <GenericBoton styleDiv='send-data-div' id='send-data' newFunction={onSend} estilo='send-data'/>
    </>
    )
}

export default SendList;