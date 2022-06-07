import React,{useState} from "react";
import {endpoints} from '../../http/endpoints';
function Component_Services_AllServices({children}){
  console.log('endpoints ?: ',endpoints.services)
    return(<>
      <div className="etiquetas">
        <div className="etiquetas-colores">
          <div className="etiquetas-colores-red">No solucionados</div>
          <div className="etiquetas-colores-green">Solucionados</div>
        </div>
      </div>
      {children}
      </>)
}

export default Component_Services_AllServices;
