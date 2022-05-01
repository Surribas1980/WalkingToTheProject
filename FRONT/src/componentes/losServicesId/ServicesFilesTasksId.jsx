import React,{useState} from "react";
import Docx from '../../images/documents/archivo-word.png';
import Xlsx from '../../images/documents/archivo-xlsx.png';
import Pptx from '../../images/documents/archivo-powerpoint.png';
function ServicesFilesTasksId(props){
const [documento,setDocumento] = useState([Object.values(props.ficheros)]);


  let salida = documento[0].map((item,index)=>{
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
    return (
      <div className="son">
        <img id="icono" src={thePath}/>
        <a href={dir}>
          <span name="task">{item}</span>
        </a>
      </div>
    )
  })

    return (<>
      <div id="services-task-id">
        <span name="service-titulo">Archivos:</span>
        
          <div className="services-task-id-file-and-img">
            {salida}
          </div>

      </div>
    </>)
}

export default ServicesFilesTasksId;
