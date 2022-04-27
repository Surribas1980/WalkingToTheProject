import React,{useState} from "react";

function AllServices({children}){
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

export default AllServices;
