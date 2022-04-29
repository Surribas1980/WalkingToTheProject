import React,{useState} from "react";

function ServicesTasksTaskId(props){
    const [taskN,setTaskN]=useState([Object.values(props.task)]);
    let salida = taskN[0].map((item,index)=>{
        return (<span name="task">{item}</span>)
    })
   
    return (<>{salida}</>)
}

export default ServicesTasksTaskId;