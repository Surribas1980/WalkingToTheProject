import React,{useState} from "react";
import {Link,Outlet} from 'react-router-dom'
import imagen from '../../../../images/avatares/chico.png';

function Component_Personal_ConversationsId_Iframe(props){

    const [verOtro,setVerOtro] = useState(false);

    /*let donlike = (valor)=>{
        setVerOtro (!valor);
        console.log('valor : ',valor)
    }*/

    let salida = props.usuarios.map((item,index)=>{
        let sortDescription = item.descripcion.slice(0,20);
        return (
          <Link name="service-defalut" to={`/services/${item.id}/conversation/${item.usuario}`} key={index}>
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



              /*let salida = props.usuarios.map((item,index)=>{
                let sortDescription = item.descripcion.slice(0,20);
                return (
                 
                    <div className={props.styleShowServices} onClick={()=>{donlike(verOtro)}}>
                      <img id='icono' name="services" className="show-services-list-span" src={imagen}/>
                      <div className="show-services-list-span">
                        <span name="service-titulo">Titulo: {item.titulo}</span>
                        <span name="service-usuario">Usuario: {item.usuario}</span>
                        <span name="service-description-initial">Descripción: {sortDescription}(...)</span>
                      </div>
              
                    </div>
                  
                )
              })
              
                  return(
                      <>
                          {salida}
                          
                      </>)*/

}

export default Component_Personal_ConversationsId_Iframe;