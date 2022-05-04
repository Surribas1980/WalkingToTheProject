import React,{memo,useState} from "react";
import Icono from "../Icono";
import Delete from '../../images/tasklist/bote-de-basura.png';
import TareaRealizada from '../../images/tasklist/ok-marca.png';

function Component_TaskList_PaintDescription(props){
    const [color,setColor] = useState([]);/*"tasklist-element-statuss-change"*/
    const [cambiaStyle,setCam] = useState(false);

      
    props?.list.map(()=>{
        color.push("tasklist-element");
        return 1
    })
   console.log('las props list: ',props?.list)
    const salida = props?.list.map(
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

        let texto;
        console.log('tasks...',item.task,item)
        if(item.description){
            texto = <>

            <div className="tasklist">
                <div className={color[index]} onClick={()=>{paintGreen(!cambiaStyle,index,color[index])}}>
                    <span className="span-tarea"><Icono elname={"ok"}  elkey={null} imagen={TareaRealizada}/></span>
                    {item.description}
                </div>
                <Icono elname={"delete"} eliminarFun={props.laFun} elkey={index} imagen={Delete}/>
            </div>
           
        </>;

        }
        
        return (
            <>{texto}</>
        )
    })


    return (<>
    <div>Descripción</div>
    {salida}</>)
}

export default memo(Component_TaskList_PaintDescription);