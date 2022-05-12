import React,{useState} from "react";

function Component_ServicesId_Confirm_SolutionId(props){

    const [elIndex,setElIndex] = useState(null);
    const [ver,setVer] = useState(false);
    const miFun = (cambiarVer,index)=>{
        setElIndex(index);
        setVer(!cambiarVer);
    }

    let salida = props.solucionadores?.map((item,index)=>{
        
        let ficheros;
        
        return (
        <div onClick={()=>{miFun(ver,index)}}>
            <img></img>
            <div>
                <span></span>
                <span></span>
            </div>
            <div>
                {ver === true ? ficheros : ''}
            </div>
        </div>)
    })
    return (<>{salida}</>)
}

export default Component_ServicesId_Confirm_SolutionId;