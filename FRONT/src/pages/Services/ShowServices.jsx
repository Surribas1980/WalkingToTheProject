import React from "react";
import {Link,Outlet} from "react-router-dom";
import imagen from '../../images/avatares/chico.png';
function SolutionedServices(props){

let salida = props.servicios.map((item,index)=>{
  let sortDescription = item.descripcion.slice(0,20);
  return (
    <Link name="service-defalut" to={`/services/${item.id}`} key={index}>
      <div className={props.styleShowServices}>
        <img id='icono' name="services" className="show-services-list-span" src={imagen}/>
        <div className="show-services-list-span">
          <span name="service-titulo">Titulo: {item.titulo}</span>
          <span name="service-usuario">Usuario: {item.usuario}</span>
          <span name="service-description-initial">Descripción: {sortDescription}(...)</span>
        </div>

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
