import React,{useState} from "react";

function Component_ServicesId_ServicesTasksId_ServicesTasksTaskId(props){
    const [taskN,setTaskN]=useState([Object.values(props.task)]);
    let salida = taskN[0].map((item,index)=>{
        return (<span name="task">{item}</span>)
    })

    return (<>{salida}</>)
}

export default Component_ServicesId_ServicesTasksId_ServicesTasksTaskId;
