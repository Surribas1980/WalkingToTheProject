import React,{useState} from "react";
import Component_Services_AllServices from "../../componentes/losServices/Component-Services-AllServices";
import Component_Services_ShowServices from "../../componentes/losServices/Component-Services-ShowServices";
import { getAllServices } from "../../data.js";
function Page_Services(){
    const [services,setServices] = useState(getAllServices());
    /*const [solucionados,setSolucionados] = useState([]);
    const [noSolucionados,setNoSolucionados] = useState([]);*/

    let elvector = services?.map((item,index)=>{
        let elemento = {};
        elemento.titulo = item.solutioned;
        return (elemento)
    })
    let solu = services?.filter((item)=>{
        return (item.solutioned === true);
    })
    let nosolu = services?.filter((item)=>{
        return (item.solutioned === false);
    })
console.log('services', elvector,solu,nosolu)
    return(<>
    <div id="total-services">
        <Component_Services_AllServices>
          <div className="show-services">
            <span name="titulo-show-services">Servicios Solucionados</span>
            <Component_Services_ShowServices styleShowServices="services-solutionados" servicios={solu}/>
          </div>
          <div className="show-services">
            <span name="titulo-show-services">Servicios No Solucionados</span>
            <Component_Services_ShowServices styleShowServices="services-not-solutionados" servicios={nosolu}/>
          </div>
        </Component_Services_AllServices>
    </div>
    </>)
}

export default Page_Services;
