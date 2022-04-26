import React , {memo} from "react";

function TitleList(props){

    return(<div name="titulo-lista-tareas">{props.title}</div>)
}

export default memo(TitleList);