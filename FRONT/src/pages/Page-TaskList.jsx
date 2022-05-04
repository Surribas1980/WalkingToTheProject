import React, {useState,useRef, useCallback} from "react";

import Component_TaskList_InsertList from "../componentes/laTaskList/Component-TaskList-InsertList";
import Component_TaskList_PaintList from "../componentes/laTaskList/Component-TaskList-PaintList";
import Component_TaskList_SendList from "../componentes/laTaskList/Component-TaskList-SendList";
import Componente_TaskList_TitleList from "../componentes/laTaskList/Component-TaskList-TitleList";
import Component_TaskList_WritenTitleOrList from "../componentes/laTaskList/Component-TaskList-WritenTitleOrList";


function TaskList(){

    const [lista,setLista] = useState([]);
    let [titleListTask , setTitleListTask ] = useState("Lista de tareas")
    let [descriptionTask, setDescriptionTask] = useState("Sin descripcion");
    let [elFile,setFile]= useState();
    const [thereFiles,setThereFiles] = useState(false);
    const [thereDescription,setDescription] = useState(false);
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

    const SaveFile = useCallback (()=>{
      /*setFile(valueFile.current.files[1].name);*/
        let valor = valueFile.current.files;


        for (let i = 0 ; i < valor.length ; i++){
            setFile(valueFile.current.files[i].name);
            let novoObj = new Object();
            novoObj.fichero = valueFile.current.files[i].name;
            lista.push(novoObj);
        }

        setThereFiles(true);
        console.log('la lista: ',lista)

    },[lista])

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
        lista.push(novoObj);
        setDescription(true);
    })

    const DeleteTaskLis = useCallback((index)=>{
        setLista(()=>{
            lista.splice(index,1);
            return [...lista]
        })
        /*setDescription(false);*/

    },[lista]);

    return(<>


    <Componente_TaskList_TitleList title={titleListTask}/>
    <Component_TaskList_PaintList thereDescription={thereDescription} thereFiles={thereFiles} laFun={DeleteTaskLis} list={lista} />
    <Component_TaskList_InsertList>
        <Component_TaskList_WritenTitleOrList eltype = "text" elspan="Tarea" inputref={valueInput}  laFun={SaveList} elplace="Introduce tarea ..."/>
        <Component_TaskList_WritenTitleOrList eltype = "text" elspan="Cambio de titulo?" inputref={valueTitle} laFun={SaveTitleList} elplace="Introduce titulo de tarea ..."/>
        <Component_TaskList_WritenTitleOrList eltype = "file" elspan="Introduce fichero" inputref={valueFile} laFun={SaveFile} elplace="Introduce titulo de ficheros"/>
        <Component_TaskList_WritenTitleOrList eltype = "textarea" elspan="Descripcion" inputref={valueDescription} laFun={SaveDescriptionList} elplace="Introduce Descripcion"/>
    </Component_TaskList_InsertList>

    <Component_TaskList_SendList list={lista} />
    </>)
}

export default TaskList;
