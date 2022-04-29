import React from 'react';
import { useParams } from "react-router-dom";
import ServicesTasksId from '../../componentes/losServicesId/ServicesTasksId.jsx';

import {getAllServices} from '../../data.js';

function ServicesId(){
  let params = useParams();
  
  let salida = getAllServices()?.filter((item)=>{
        return (item.id == params.id);
  })
  console.log('estoy en ServiciosId: ',salida)
  return (
  <div>
      <ServicesTasksId taskId={salida} />
    </div>)
}

export default ServicesId;
