import React,{useState} from "react";
import ListMessages from "./ListMessages";
import AllServices from "./AllServices";
import ShowServices from "./ShowServices";
import { getAllServices } from "../../data.js";
function Services(){
    const [services,setServices] = useState(getAllServices());
    const [solucionados,setSolucionados] = useState([]);
    const [noSolucionados,setNoSolucionados] = useState([]);

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
    <ListMessages>
        Esto es desde Services a ListMessages
    </ListMessages>
    <div id="total-services">
        <AllServices>
          <ShowServices styleShowServices="services-solutionados" servicios={solu}/>
          <ShowServices styleShowServices="services-not-solutionados" servicios={nosolu}/>
        </AllServices>
    </div>
    </>)
}

export default Services;
