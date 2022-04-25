import React, {useState,useRef,useEffect, useCallback} from "react";
import InsertList from "../componentes/laTaskList/InsertList";
import PaintList from "../componentes/laTaskList/PaintList";
import SendList from "../componentes/laTaskList/SendList";
import TitleList from "../componentes/laTaskList/TitleList";
import WritenTitleOrList from "../componentes/laTaskList/WritenTitleOrList";


function TaskList(){
    
    const [lista,setLista] = useState([]);
    let [titleListTask , setTitleListTask ] = useState("Lista de tareas")
   
    const valueInput = useRef("");
    const valueTitle = useRef("");

    
    const SaveList = useCallback ((dato)=>{
        
        setLista(()=>{
            const novoObj = new Object();
            
                novoObj.task = dato;
                novoObj.done = 'not done';
                valueInput.current.value= '';
            
            lista.push(novoObj)
            
            return [...lista]
        });

        console.log('dentro',lista);
        
    },[lista]);
    
    
    const SaveTitleList = useCallback ((titulo) =>{
        setTitleListTask(titulo)
        valueTitle.current.value= '';
        
        let novoObj = new Object();
        novoObj.title = titulo;
        lista.push(novoObj);
    },[titleListTask]);

    return(<>
   
    
    <TitleList title={titleListTask}/>
    <PaintList list={lista} />
    <InsertList>
       
        <WritenTitleOrList elspan="Tarea" inputref={valueInput}  laFun={SaveList} elplace="Introduce tarea ..."/>
        <WritenTitleOrList elspan="Cambio de titulo?" inputref={valueTitle} laFun={SaveTitleList} elplace="Introduce titulo de tarea ..."/>
    </InsertList>
    <SendList list={lista} />
    </>)
}

export default TaskList;