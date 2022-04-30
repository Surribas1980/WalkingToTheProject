import React from 'react';
import { useParams } from "react-router-dom";
import ServicesTasksId from '../../componentes/losServicesId/ServicesTasksId.jsx';

import {getAllServices} from '../../data.js';

function ServicesId(){
  let params = useParams();

  let theTask = getAllServices()?.filter((item)=>{
        return (item.id == params.id);
  })
  
  return (
  <div>
      <ServicesTasksId taskId={theTask} />
    </div>)
}

export default ServicesId;
