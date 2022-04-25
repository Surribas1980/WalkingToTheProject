import React,{memo} from "react";

function Icono(props){
    
   
    return (<img name={props.elname} onClick={(event)=>{props.eliminarFun(props.elkey)}} id="icono" src={props.imagen} alt="imagen"/>)
}

export default memo(Icono);