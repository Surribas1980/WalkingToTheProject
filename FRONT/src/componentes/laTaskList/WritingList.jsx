import React from "react";

function WritingList(props){

    return(
    <div className="" id="writinglist">
        <span>Tarea</span>
        <input ref={props.inputref}  placeholder="Introduce tarea ..."/>
        <button className="save-data-default" onClick={()=>{props.laFun(props.inputref.current.value)}}>Guardar</button>
        
        
    </div>)
}

export default WritingList;