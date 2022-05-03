import React, {useState,useRef, useCallback} from "react";

import InsertList from "../componentes/laTaskList/InsertList";
import PaintList from "../componentes/laTaskList/PaintList";
import SendList from "../componentes/laTaskList/SendList";
import TitleList from "../componentes/laTaskList/TitleList";
import WritenTitleOrList from "../componentes/laTaskList/WritenTitleOrList";


function TaskList(){

    const [lista,setLista] = useState([]);
    let [titleListTask , setTitleListTask ] = useState("Lista de tareas")
    let [descriptionTask, setDescriptionTask] = useState("Sin descripcion");
    let [elFile,setFile]= useState();
    const valueFile = useRef("");
    const valueInput = useRef("");
    const valueTitle = useRef("");
    const valueDescription = useRef("");


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

    const SaveFile = useCallback ((file)=>{
      setFile(file)
        let nombreFichero = valueFile.current.files[0].name;
      console.log('nombreFichero: ',nombreFichero)

      let novoObj = new Object();
      novoObj.fichero = valueFile.current.files[0].name;
      lista.push(novoObj);
/*valueFile.current.file[0].name = '';*/
console.log('la lista: ',lista)

    },[elFile])

    const SaveTitleList = useCallback ((titulo) =>{
        setTitleListTask(titulo)
        valueTitle.current.value= '';

        let novoObj = new Object();
        novoObj.title = titulo;
        lista.push(novoObj);
    },[titleListTask]);

    const SaveDescriptionList = useCallback ((descripcion)=>{
        setDescriptionTask(descripcion);
        valueDescription.current.value = '';
        let novoObj = new Object();
        novoObj.description = descripcion;
        lista.push(novoObj)
    })

    const DeleteTaskLis = useCallback((index)=>{
        setLista(()=>{
            lista.splice(index,1);
            return [...lista]
        })


    },[lista]);

    return(<>


    <TitleList title={titleListTask}/>
    <PaintList laFun={DeleteTaskLis} list={lista} />
    <InsertList>
        <WritenTitleOrList eltype = "text" elspan="Tarea" inputref={valueInput}  laFun={SaveList} elplace="Introduce tarea ..."/>
        <WritenTitleOrList eltype = "text" elspan="Cambio de titulo?" inputref={valueTitle} laFun={SaveTitleList} elplace="Introduce titulo de tarea ..."/>
        <WritenTitleOrList eltype = "file" elspan="Introduce fichero" inputref={valueFile} laFun={SaveFile} elplace="Introduce titulo de ficheros"/>
    </InsertList>

    <SendList list={lista} />
    </>)
}

export default TaskList;
