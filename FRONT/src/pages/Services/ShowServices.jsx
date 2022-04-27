import React from "react";
import {Link,Outlet} from "react-router-dom";
function SolutionedServices(props){

let salida = props.servicios.map((item,index)=>{
  return (
    <Link name="service-defalut" to={`/services/${item.id}`} key={index}>
      <div className={props.styleShowServices}>
        <span name="service-titulo">Titulo: {item.titulo}</span>
        <span name="service-usuario">Usuario: {item.usuario}</span>
        <span name="service-description">Descripción: {item.descripcion}</span>
      </div>
    </Link>
  )
})

    return(
        <>
            {salida}
            <Outlet />
        </>)
}

export default SolutionedServices;
