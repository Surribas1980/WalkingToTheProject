import React,{memo,useState} from "react";
import Icono from "../Icono";

import Delete from '../../images/tasklist/bote-de-basura.png';
import TareaRealizada from '../../images/tasklist/ok-marca.png';

function PaintList(props){
    const [color,setColor] = useState([]);
    const [cambiaStyle,setCam] = useState(false);
    props?.lista.map(()=>{
        color.push("tasklist-element");
        return 1
    })
    const salidaFicheros = props?.lista.map(
        (item,index)=>{
        
        const paintGreen = (cambiarAotroEstilo,elemmento,elEstiloDelDiv) =>{
            let cambia;
            if(elEstiloDelDiv === "tasklist-element"){

                let nuevoStilo = ' tasklist-element-statuss-change';
                cambia = `tasklist-element${nuevoStilo}`;
                color[elemmento] = cambia;
                props.list[elemmento].done = 'done';
                setCam(cambiarAotroEstilo)
                console.log('elemento: ', props.list[elemmento])
            }else{
                
                color[elemmento] = "tasklist-element";
                setCam(cambiarAotroEstilo);
                props.list[elemmento].done = 'not done';
                console.log('elemento: ', props.list[elemmento])
            }
            
            
        }

        
        let ficheros;
        if(item.fichero){
            ficheros = <>
            <div className="tasklist">
                <div className={color[index]} onClick={()=>{paintGreen(!cambiaStyle,index,color[index])}}>
                    <span className="span-tarea"><Icono elname={"ok"}  elkey={null} imagen={TareaRealizada}/></span>
                    {item.fichero}
                </div>
                <Icono elname={"delete"} eliminarFun={props.laFun} elkey={index} imagen={Delete}/>
            </div>
            </>;
        }
        
        return (
        <>

            {ficheros}
        </>
        )
    })

    return (
    <>
        <div>Ficheros</div>
        {salidaFicheros}
    </>)
}

export default memo(PaintList);