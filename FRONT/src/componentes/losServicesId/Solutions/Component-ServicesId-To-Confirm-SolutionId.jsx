import React,{useState,useEffect} from "react";
import imagen from '../../../images/avatares/chico.png';
import Component_ServiceId_SolvedoSS from '../Solved-Or-SendSolution/Component-ServiceId-SolvedoSS';



function Component_ServicesId_To_Confirm_SolutionId(props){

    const [elIndex,setElIndex] = useState(null);
    const [ver,setVer] = useState(false);
    const [changeStyle,setChangeStyle] = useState("ver");

    const miFun = (cambiarVer,index)=>{
        setElIndex(index);
        setVer(!cambiarVer);

        changeStyle == "ocultar" ? setChangeStyle("ver") : setChangeStyle("ocultar");
        console.log('cambiar....',index,cambiarVer,changeStyle)
    }




    let salida = props.solucionadores?.map((item,index)=>{



        return (
                    <div className="two-elements" onClick={()=>{miFun(ver,index)}}>

                        <div className="several-elements">
                                <img id='icono' name="services" className="show-services-list-span" src={imagen}/>
                                <div>
                                    <span>{item.usuario}</span>
                                    <span><Component_ServiceId_SolvedoSS confirmar={true} ficheros={item.files} /></span>
                                </div>

                        </div>
                        <div className="several-elements">
                        {elIndex === index ?
                          <div name={changeStyle}>
                              <input type="checkbox" />
                              <input name="puntuacion" type="text"/>
                          </div> : <div name= "ocultar">
                              <input type="checkbox" />

                              <input name="puntuacion" type="text"/>
                          </div>
                        }

                        </div>
                    </div>
                )
    })
    return (
    <div id="component-servicesId-conversations">
        <span name="titulo-lista-tareas">Posibles solucionadores</span>
        <div className="conversations">
            <div id="wrapper-table-list">
                    {salida}
            </div>

        </div>
    </div>

    )

}

export default Component_ServicesId_To_Confirm_SolutionId;
