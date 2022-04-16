import react from "react";

function GenericBoton(props){
    return(
        <div  className={props.styleDiv}>

            <button id={props.id} onClick={()=>{props.newFunction()}} className={props.estilo}>&nbsp;</button>
        </div>
    )
}

export default GenericBoton;
