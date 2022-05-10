import React,{useState,useEffect} from "react";
import {Link,Outlet} from 'react-router-dom'
import imagen from '../../../../images/avatares/chico.png';

function Component_Personal_ConversationsId_Iframe(props){

    const [verOtro,setVerOtro] = useState(true);
    const [elIndex,setElIndex] = useState();
    


    console.log('Component_Personal_ConversationsId_Iframe: ',props,props.elservicio)


    let donlike = (valor,index)=>{
        setVerOtro (!valor);
        console.log('valor : ',valor,index)
        setElIndex(index);
        
            
    }

   
    let salida;
    if(verOtro){
       salida = props.usuarios.map((item,index)=>{
        let sortDescription = item.descripcion.slice(0,20);
       
       let elLink = <Link name="service-defalut" to={`/services/${item.id}/conversation/${item.usuario}`} key={index}>
       <div onClick={()=>{donlike(verOtro,index)}} className={props.styleShowServices}>
         
         <img id='icono' name="services" className="show-services-list-span" src={imagen}/>
         <div className="show-services-list-span">
           <span name="service-titulo">Titulo: {item.titulo}</span>
           <span name="service-usuario">Usuario: {item.usuario}</span>
           <span name="service-description-initial">Descripción: {sortDescription}(...)</span>
         </div>
 
       </div>
     </Link>;
                    
        return (
          <>{elLink}</>
        )
      })
    }else{
      let sortDescription = props?.usuarios[elIndex].descripcion.slice(0,20);
      
     

      salida = <Link name="service-defalut" to={`/services/${props.elservicio}/`}>

      <div onClick={()=>{donlike(verOtro,0)}} className={props.styleShowServices}>
                          
      <img id='icono' name="services" className="show-services-list-span" src={imagen}/>
      <div className="show-services-list-span">
        <span name="service-titulo">Titulo: {props?.usuarios[elIndex].titulo}</span>
        <span name="service-usuario">Usuario: {props?.usuarios[elIndex].usuario}</span>
        <span name="service-description-initial">Descripción: {sortDescription}(...)</span>
      </div>

      </div>
      </Link> 
    }

    
      



          return(
              <>
                  {salida}
                  <Outlet />
              </>)



              

}

export default Component_Personal_ConversationsId_Iframe;