import React,{useState} from "react";
import Icono from "../Icono";
import Delete from '../../images/tasklist/bote-de-basura.png';
import TareaRealizada from '../../images/tasklist/ok-marca.png';
function PaintList(props){
    const [color,setColor] = useState([]);/*"tasklist-element-statuss-change"*/
    const [cambiaStyle,setCam] = useState(false);


    const eliminar = (event,valor)=>{
        console.log('event: ', event,valor)
    }

   

    props?.list.map(()=>{
        color.push("tasklist-element");
        return 1
    })
   
    const salida = props?.list.map((item,index)=>{
        
        const paintGreen = (cambiarAotroEstilo,elemmento,elEstiloDelDiv) =>{
            let cambia;
            if(elEstiloDelDiv === "tasklist-element"){

                let nuevoStilo = ' tasklist-element-statuss-change';
                cambia = `tasklist-element${nuevoStilo}`;
                color[elemmento] = cambia;
                setCam(cambiarAotroEstilo)
            }else{
                
                color[elemmento] = "tasklist-element";
                setCam(cambiarAotroEstilo)
                
            }
            
            
        }

        
        return (
        <div className="tasklist">
            <div className={color[index]} onClick={()=>{paintGreen(!cambiaStyle,index,color[index])}}>
                <span className="span-tarea"><Icono elname={"ok"} eliminarFun={eliminar} elkey={index} imagen={TareaRealizada}/></span>{item}
            </div>
            <Icono elname={"delete"} eliminarFun={eliminar} elkey={index} imagen={Delete}/>
        </div>
        )
    })

   
   

    return(<div className="totaltasklist">{salida}</div>)
}

export default  PaintList;