import React from 'react';
import { useParams } from "react-router-dom";
import Component_ServicesId_ServicesTasksTaskId from '../../componentes/losServicesId/Component-ServicesId-ServicesTasksId.jsx';

import {getAllServices} from '../../data.js';

function Page_ServicesId(){
  let params = useParams();

  let theTask = getAllServices()?.filter((item)=>{
        return (item.id == params.id);
  })

  return (
  <div>
      <Component_ServicesId_ServicesTasksTaskId taskId={theTask} />
    </div>)
}

export default Page_ServicesId;
