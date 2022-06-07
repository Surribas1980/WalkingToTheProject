import React , { useState } from "react";
import GenericBoton from "../GenericBoton";

/*--- Functions on http ---*/
import { endpoints } from '../../http/endpoints';
import { envioWithFiles } from '../../http/api';
import { method } from '../../http/method';


/*--- misHelpers ---*/
import { theFormData } from '../../helpers/misHelpers';
import { envioDatos } from '../../http/api';

function Component_TaskList_SendList(props){

    const onSend = async() =>{

        const datos = {
          form: theFormData(props,1),
          endpoint: endpoints.sendService,
          method: method.post
        }
        const valorrespuesta = await envioDatos(datos,'form')

        console.log('valorrespuesta : ',valorrespuesta)
    }

    return (
    <>
        <GenericBoton styleDiv='send-data-div' id='send-data' newFunction={onSend} estilo='send-data'/>
    </>
    )
}

export default Component_TaskList_SendList;
