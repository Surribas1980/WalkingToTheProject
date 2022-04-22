import React from "react";

function WritingList(props){

    return(
    <div className="" id="writinglist">
        <span>Tarea</span>
        <input ref={props.laref}  placeholder="Introduce tarea ..."/>
        <button className="save-data-default" onClick={()=>{props.laFun(props.laref.current.value)}}>Guardar</button>
        
    </div>)
}

export default WritingList;