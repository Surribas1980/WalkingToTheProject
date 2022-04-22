import React,{useState,useEffect} from "react";
import Icono from "../Icono";
import Delete from '../../images/tasklist/bote-de-basura.png';
function PaintList(props){
    
    const eliminar = (event,valor)=>{
        console.log('event: ', event,valor)
    }
    const salida = props?.list.map((item,index)=>{
        return (
        <div className="tasklist">
            <div className="tasklist-element" >{item}</div>
            <Icono eliminarFun={eliminar} elkey={index} imagen={Delete}/>
        </div>)
    })

   
   

    return(<div className="totaltasklist">{salida}</div>)
}

export default  PaintList;