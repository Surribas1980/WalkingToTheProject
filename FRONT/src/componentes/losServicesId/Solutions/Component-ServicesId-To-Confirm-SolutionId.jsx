import React,{useState} from "react";

function Component_ServicesId_To_Confirm_SolutionId(props){

    const [elIndex,setElIndex] = useState(null);
    const [ver,setVer] = useState(false);
    const [changeStyle,setChangeStyle] = useState("ver");

    const miFun = (cambiarVer,index)=>{
        setElIndex(index);
        setVer(!cambiarVer);
    }
    console.log('los solucionadores: ',props.solucionadores)
    /*let salida = props.solucionadores?.map((item,index)=>{

        let ficheros;

        return (
                    <div className="two-elements" onClick={()=>{miFun(ver,index)}}>
                        <div className="several-elements">
                                    <img></img>
                                <div>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div>
                                        {ficheros}
                                </div>
                        </div>
                        <div className="several-elements">
                            <div name={changeStyle}>

                            </div>
                        </div>
                    </div>
                )
    })
    return (<div id="wrapper-table-list">{salida}</div>)*/
    return (<>hola solucionadores</>)
}

export default Component_ServicesId_To_Confirm_SolutionId;
