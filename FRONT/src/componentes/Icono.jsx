import React from "react";

function Icono(props){
    return (<img name={props.elname} onClick={(event)=>{props.eliminarFun(event,props.elkey)}} id="icono" src={props.imagen} alt="imagen"/>)
}

export default Icono;