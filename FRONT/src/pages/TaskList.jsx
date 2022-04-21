import React, {useState,useRef} from "react";
import InsertList from "../componentes/laTaskList/InsertList";

function TaskList(){
    const [dato,setDato] = useState();
    const valueInput = useRef("")
    const InsertoDate = (event)=>{
        
        setDato(event.target.value)
    }
    return(<>
    <h1>Lista de tareas</h1>
    <InsertList valorInput={valueInput} dato={dato} setDato={setDato}/>
    <input ref={valueInput} onChange={(event)=>{InsertoDate(event)}}/>
    </>)
}

export default TaskList;