import React, {useState,useRef, useCallback} from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes,uploadString } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: ,
  authDomain: ,
  databaseURL: ,
  projectId: ,
  storageBucket: ,
  messagingSenderId: ,
  appId: ,
  measurementId: 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/**
 * 
 */
import Component_TaskList_InsertList from "../componentes/laTaskList/Component-TaskList-InsertList";
import Component_TaskList_PaintList from "../componentes/laTaskList/Component-TaskList-PaintList";
import Component_TaskList_SendList from "../componentes/laTaskList/Component-TaskList-SendList";
import Componente_TaskList_TitleList from "../componentes/laTaskList/Component-TaskList-TitleList";
import Component_TaskList_WritenTitleOrList from "../componentes/laTaskList/Component-TaskList-WritenTitleOrList";


function Page_TaskList(){

    const [lista,setLista] = useState([]);
    const [theFiles,setTheFiles] = useState(null);
    let [titleListTask , setTitleListTask ] = useState("Lista de tareas")
    let [descriptionTask, setDescriptionTask] = useState("Sin descripcion");
    let [elFile,setFile]= useState();
    const [thereFiles,setThereFiles] = useState(false);
    const [thereDescription,setDescription] = useState(false);
    const valueFile = useRef("");
    const valueInput = useRef("");
    const valueTitle = useRef("");
    const valueDescription = useRef("");
    const storage = getStorage();
    const storageRef = ref(storage, 'some');
    

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

        let valor = valueFile.current.files;

        uploadBytes(storageRef, valueFile.current.files[0]).then((snapshot) => {
            console.log('Uploaded a blob or file!');
          });
        for (let i = 0 ; i < valor.length ; i++){

            setFile(valueFile.current.files[i].name);
            let novoObj = new Object();
            novoObj.fichero = valueFile.current.files[i].name;
            lista.push(novoObj);
            let proba = new Object();



        }


        setThereFiles(true);
        console.log('ficheros ?: ',valor)
        setTheFiles(valueFile.current.files)
    },[lista])

    const SaveTitleList = useCallback ((titulo) =>{
        setTitleListTask(titulo)
        valueTitle.current.value= '';

        let novoObj = new Object();
        novoObj.title = titulo;
        lista.push(novoObj);
                const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
                uploadBytes(storageRef, bytes).then((snapshot) => {
                console.log('Uploaded an array!');
                });
            // Base64 formatted string
            const message2 = 'Q2FkZW5hIGEgY29kaWZpY2Fy';
            uploadString(storageRef, message2, 'base64').then((snapshot) => {
            console.log('Uploaded a base64 string!');
            });
            
            // Base64url formatted string
            /*const message3 = '5b6p5Y-344GX44G-44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
            uploadString(storageRef, message3, 'base64url').then((snapshot) => {
            console.log('Uploaded a base64url string!');
            });*/
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
        if(lista[index].description){
            setDescription(false);
        }

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

    <Component_TaskList_SendList ficheros={theFiles} list={lista} />
    </>)
}

export default Page_TaskList;
