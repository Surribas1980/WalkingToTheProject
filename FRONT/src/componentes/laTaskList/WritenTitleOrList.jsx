import React, { memo } from "react";

function WritenTitleOrList (props){
return(
<div className="" id="writinglist">
    <span>{props.elspan}</span>
    <input type={props.eltype} ref={props.inputref}  placeholder={props.elplace}/>
    <button className="save-data-default" onClick={()=>{props.laFun(props.inputref.current.value)}}>Guardar</button>
</div>)
}

export default memo(WritenTitleOrList);
