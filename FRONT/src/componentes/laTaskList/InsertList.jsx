import React,{useState,useEffect} from "react";
import Delete from '../../images/tasklist/bote-de-basura.png';
import PaintList from "./PaintList";
import SendList from "./SendList";
function InsertList(props){
    const [lista,setLista] = useState([]);
    const [cambia,setCambia] = useState(false);
    
   
    useEffect(()=>{},[cambia])
    let cam;
    const SaveList = (dato)=>{
        lista.push(dato);
        props.valorInput.current.value= '';
        
        cam = cambia;
        setCambia(!cam)
    }
    return (<>
    <PaintList list={lista} imgEliminar={Delete}/>
    <button onClick={()=>{SaveList(props.valorInput.current.value)}}>Guardar</button>
    <SendList />
    </>)
}

export default InsertList;