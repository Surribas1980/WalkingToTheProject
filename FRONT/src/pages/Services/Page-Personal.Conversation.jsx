import React from "react";
import { useParams } from "react-router-dom";

function Page_Personal_Conversation_Id(props){
    let usuparams = useParams();

    console.log('usu: ',usuparams )


    return (<>hola conversacion {usuparams.idUsuario}
    <iframe src="services/2/conversation/mariano"></iframe></>)
}

export default Page_Personal_Conversation_Id;