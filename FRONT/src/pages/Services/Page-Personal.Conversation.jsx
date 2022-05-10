import React from "react";
import { useParams,Link } from "react-router-dom";

function Page_Personal_Conversation_Id(props){
    let usuparams = useParams();

    console.log('usu: ',usuparams )


    return (<>
    hola conversacion {usuparams.idUsuario}
    {props.dato}
   </>)
}

export default Page_Personal_Conversation_Id;