import React,{useState} from "react";

function Component_Services_AllServices({children}){
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
