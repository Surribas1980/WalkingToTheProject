import React,{useState} from "react";
import Component_ServicesId_To_Confirm_SolutionId from './Component-ServicesId-To-Confirm-SolutionId';

import {myPossiblePersonSolved} from '../../../data.js';

function Component_ServicesId_SolutionsId(props){
const [possibleSolved,setPossibleSolved] = useState(myPossiblePersonSolved())

let losSolucionadores = possibleSolved?.filter((item)=>{
    return (item.numservicio == props.theId)
})

    return(<><Component_ServicesId_To_Confirm_SolutionId solucionadores={losSolucionadores}/></>)
}

export default Component_ServicesId_SolutionsId;
