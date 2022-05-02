import React from "react";

function GenericBoton(props){

    
    return(
        <div className={props.styleDiv}>
            <button id={props.id} onClick={()=>{props.newFunction()}} className={props.estilo}>&nbsp;{props.texto}</button>
        </div>
    )
}

export default GenericBoton;
