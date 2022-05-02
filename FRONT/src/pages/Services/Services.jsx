import React,{useState} from "react";
import AllServices from "./AllServices";
import ShowServices from "./ShowServices";
import { getAllServices } from "../../data.js";
function Services(){
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
        <AllServices>
          <div className="show-services">
            <span name="titulo-show-services">Servicios Solucionados</span>
            <ShowServices styleShowServices="services-solutionados" servicios={solu}/>
          </div>
          <div className="show-services">
            <span name="titulo-show-services">Servicios No Solucionados</span>
            <ShowServices styleShowServices="services-not-solutionados" servicios={nosolu}/>
          </div>
        </AllServices>
    </div>
    </>)
}

export default Services;
