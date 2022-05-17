import React,{useState} from "react";


import Docx from '../../../images/documents/archivo-word.png';
import Xlsx from '../../../images/documents/archivo-xlsx.png';
import Pptx from '../../../images/documents/archivo-powerpoint.png';


function Component_ServiceId_SolvedoSS(props){
  const [archivos,setArchivo] = useState([Object.values(props.ficheros)])
  let salida = archivos[0].map((item,index)=>{
    let thePath;
    const urlstatic = "/FRONT/src/documentos/";

    if(item.slice(-4) == "docx"){
      thePath = Docx;

    }
    if(item.slice(-4) == "xlsx"){
      thePath = Xlsx;
    }
    if(item.slice(-4) == "pptx"){
      thePath = Pptx;
    }
    let dir = urlstatic + `${item}`;
    let enlazar = dir.slice(14);
    return (<div className="son">
      <img id="icono" name="docs" src={thePath}/>
      <a href={dir}>
        <span name="task">{item}</span>
      </a>

    </div>)

  })
console.log('la salida: ', props.ficheros)
    return (<>

      {props.confirmar === false ? <>Resuelto<div>Puntuación : </div></> : ''}
        <div id='solved'>

        {salida}

        </div>
        </>)
}

export default Component_ServiceId_SolvedoSS;
