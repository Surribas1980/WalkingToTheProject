import React,{useState} from "react";
import Component_Services_AllServices from "../../componentes/losServices/Component-Services-AllServices";
import Component_Services_ShowServices from "../../componentes/losServices/Component-Services-ShowServices";
import { getAllServices } from "../../data.js";
function Page_Services(props){
    const [services,setServices] = useState(getAllServices());

    let elvector;
    let solu;
    let nosolu;
    let direccion;
console.log('services: ', elvector,solu,nosolu,' props:',props.usuario)
if(props.usuario){
  console.log('contén algo',props.usuario,props.misservicios);
  elvector = props.misservicios?.map((item,index)=>{
    let elemento = {};
    elemento.titulo = item.solved;
    return (elemento)
  })
  solu = props.misservicios?.filter((item)=>{
    return (item.solved === true);
  })
  nosolu = props.misservicios?.filter((item)=>{
    return (item.solved === false);
  })
  direccion = "misservices";
}else{
  console.log('-- undefined \n')
         elvector = services?.map((item,index)=>{
          let elemento = {};
          elemento.titulo = item.solved;
          return (elemento)
      })
       solu = services?.filter((item)=>{
          return (item.solved === true);
      })
       nosolu = services?.filter((item)=>{
          return (item.solved === false);
      })
      direccion = "services";
}
    return(<>
    <div id="total-services">
        <Component_Services_AllServices>
          <div className="show-services">
            <span name="titulo-show-services">Servicios Solucionados</span>
            <Component_Services_ShowServices vieneDe="" goTo={direccion} styleShowServices="services-solutionados" usuarios={solu}/>
          </div>
          <div className="show-services">
            <span name="titulo-show-services">Servicios No Solucionados</span>
            <Component_Services_ShowServices vieneDe="" goTo={direccion} styleShowServices="services-not-solutionados" usuarios={nosolu}/>
          </div>
        </Component_Services_AllServices>
    </div>
    </>)
}

export default Page_Services;
