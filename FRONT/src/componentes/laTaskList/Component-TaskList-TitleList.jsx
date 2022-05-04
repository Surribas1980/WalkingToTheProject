import React , {memo} from "react";

function Componente_TaskList_TitleList(props){

    return(<div name="titulo-lista-tareas">{props.title}</div>)
}

export default memo(Componente_TaskList_TitleList);