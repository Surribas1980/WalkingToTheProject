import React,{useState} from "react";
import Component_ServicesId_To_Confirm_SolutionId from './Component-ServicesId-To-Confirm-SolutionId';

import {myPossiblePersonSolved} from '../../../data.js';

function Component_ServicesId_SolutionsId(props){
const [possibleSolved,setPossibleSolved] = useState(myPossiblePersonSolved())

console.log('Component_ServicesId_SolutionsId: ',possibleSolved)
    return(<><Component_ServicesId_To_Confirm_SolutionId solucionadores={possibleSolved}/></>)
}

export default Component_ServicesId_SolutionsId;
