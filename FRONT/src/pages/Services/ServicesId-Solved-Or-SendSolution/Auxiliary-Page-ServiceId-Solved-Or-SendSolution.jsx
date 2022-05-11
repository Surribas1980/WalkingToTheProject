import React from "react";
import Component_ServiceId_SolvedoSS from "../../../componentes/losServicesId/Solved-Or-SendSolution/Component-ServiceId-SolvedoSS";
import Component_ServiceId_SoSendSolution from "../../../componentes/losServicesId/Solved-Or-SendSolution/Component-ServiceId-SoSendSolution";
import Component_To_Show_Children_Solved_Or_SendSolution from "../../../componentes/losServicesId/Solved-Or-SendSolution/Component-To-Show-Children-Solved-Or-SendSolution";

function Auxiliary_Page_ServiceId_Solved_Or_SendSolution(){


    return (
    <>
        <Component_To_Show_Children_Solved_Or_SendSolution>
            <Component_ServiceId_SoSendSolution />
            <Component_ServiceId_SolvedoSS />
        </Component_To_Show_Children_Solved_Or_SendSolution>
    </>)

}

export default Auxiliary_Page_ServiceId_Solved_Or_SendSolution;