import React, {useState,useRef,useEffect} from "react";
import InsertList from "../componentes/laTaskList/InsertList";
import PaintList from "../componentes/laTaskList/PaintList";
import SendList from "../componentes/laTaskList/SendList";
import WritingList from "../componentes/laTaskList/WritingList";

function TaskList(){
    const [cambia,setCambia] = useState(false);
    const [lista,setLista] = useState([]);
    const valueInput = useRef("");


   
    useEffect(()=>{},[cambia])
    const SaveList = (dato)=>{
        let cam;
        lista.push(dato);
        valueInput.current.value= '';
        cam = cambia;
        setCambia(!cam)
    }
   

    return(<>
    <h1>Lista de tareas</h1>
    <PaintList list={lista} />
    <InsertList>
        <WritingList laref={valueInput} laFun={SaveList}/>
    </InsertList>
    <SendList />
    </>)
}

export default TaskList;