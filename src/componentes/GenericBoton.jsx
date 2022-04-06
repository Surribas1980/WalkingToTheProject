import react from "react";

function GenericBoton(props){
    return(
        <div className={props.styleDiv}>

            <button onClick={()=>{props.newFunction()}} className={props.estilo}>{props.newForm}</button>
        </div>
    )
}

export default GenericBoton;