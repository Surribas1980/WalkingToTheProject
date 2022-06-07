import React from "react";
import Component_ServiceId_SolvedoSS from "../../../componentes/losServicesId/Solved-Or-SendSolution/Component-ServiceId-SolvedoSS";
import Component_ServiceId_SoSendSolution from "../../../componentes/losServicesId/Solved-Or-SendSolution/Component-ServiceId-SoSendSolution";
import Component_To_Show_Children_Solved_Or_SendSolution from "../../../componentes/losServicesId/Solved-Or-SendSolution/Component-To-Show-Children-Solved-Or-SendSolution";

function Auxiliary_Page_ServiceId_Solved_Or_SendSolution(props){

    console.log('Auxiliary_Page_ServiceId_Solved_Or_SendSolution : ', props)
    return (
    <>
        <Component_To_Show_Children_Solved_Or_SendSolution>
            { props.solved === true ? <Component_ServiceId_SolvedoSS ficheros = {props.solution} /> : <Component_ServiceId_SoSendSolution id={props.id}/>}

        </Component_To_Show_Children_Solved_Or_SendSolution>
    </>)

}

export default Auxiliary_Page_ServiceId_Solved_Or_SendSolution;
