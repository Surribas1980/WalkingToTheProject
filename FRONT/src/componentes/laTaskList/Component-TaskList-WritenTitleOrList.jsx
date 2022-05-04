import React, { memo } from "react";

function Component_TaskList_WritenTitleOrList (props){
    
    let salida;
    if(props.eltype == "text"){
        salida = <><input type={props.eltype} ref={props.inputref}  placeholder={props.elplace}/></>;
    }else if(props.eltype == "file"){
        console.log('types: ',props.eltype)
        salida =<><input multiple type={props.eltype} ref={props.inputref}  placeholder={props.elplace}/></>;
    }else if(props.eltype == "textarea"){
        salida =<><textarea type={props.eltype} rows="10" cols="50"  ref={props.inputref}  placeholder={props.elplace}/></>;
    }
return(
<div className="" id="writinglist">
    <span>{props.elspan}</span>
    
    {salida}
    <button className="save-data-default" onClick={()=>{props.laFun(props.inputref.current.value)}}>Guardar</button>
</div>)
}

export default memo(Component_TaskList_WritenTitleOrList);
