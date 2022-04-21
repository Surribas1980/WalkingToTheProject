import React from "react";

function Icono(props){
    return (<img onClick={(event)=>{props.eliminarFun(event,props.elkey)}} id="icono" src={props.imagen} alt="imagen"/>)
}

export default Icono;