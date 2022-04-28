import React from 'react';
import { useParams } from "react-router-dom";
import ServicesTasksId from '../../componentes/losServicesId/ServicesTasksId.jsx';

import {getAllServices} from '../../data.js';

function ServicesId(){
  let params = useParams();
  /*const [salida,setSalida] = useState([])*/
  let salida = getAllServices()?.filter((item)=>{
    let dato;
    if(item.id == params.id){
       dato = item;
    }
    return (dato);
  })
  console.log('estoy en ServiciosId: ',salida)
  return (
  <div>
    <h1>Estoy en servicios id: {params.id}</h1>
      <ServicesTasksId taskId={salida} />
    </div>)
}

export default ServicesId;
