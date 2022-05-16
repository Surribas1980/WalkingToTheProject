import React from 'react';
import { useParams } from "react-router-dom";
import Component_ServicesId_ServicesTasksTaskId from '../../../componentes/losServicesId/Component-ServicesId-ServicesTasksId.jsx';
/*import Component_ServicesId_SolutionsId */
import Component_ServicesId_SolutionsId from '../../../componentes/losServicesId/Solutions/Component-ServicesId-Solutions.jsx';


import {myServices} from '../../../data.js';

function Page_MyServicesId(){
  let params = useParams();

  let theTask = myServices()?.filter((item)=>{
        return (item.id == params.id);
  })

  return (
  <div>
      <Component_ServicesId_ServicesTasksTaskId visualizo={true} data={<Component_ServicesId_SolutionsId theId={params.id}/>} taskId={theTask} />
    </div>)
}

export default Page_MyServicesId;
