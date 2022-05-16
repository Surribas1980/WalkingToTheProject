import React,{useState} from "react";
import Component_Services_AllServices from "../../../componentes/losServices/Component-Services-AllServices";
import Component_Services_ShowServices from "../../../componentes/losServices/Component-Services-ShowServices";
import { myServices } from "../../../data.js";
function Page_MyServices(){
    const [services,setServices] = useState(myServices());

    let elvector;
    let solu;
    let nosolu;
    let direccion;

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
direccion = "myservices";
    return(<>
    <div id="total-services">
        <Component_Services_AllServices>
          <div className="show-services">
            <span name="titulo-show-services">Mis Servicios Solucionados</span>
            <Component_Services_ShowServices vieneDe="" goTo={direccion} styleShowServices="services-solutionados" usuarios={solu}/>
          </div>
          <div className="show-services">
            <span name="titulo-show-services">Mis Servicios No Solucionados</span>
            <Component_Services_ShowServices vieneDe="" goTo={direccion} styleShowServices="services-not-solutionados" usuarios={nosolu}/>
          </div>
        </Component_Services_AllServices>
    </div>
    </>)
}

export default Page_MyServices;
