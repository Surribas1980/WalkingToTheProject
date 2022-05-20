import React,{useState,useEffect} from "react";
import imagen from '../../../images/avatares/chico.png';
import Component_ServiceId_SolvedoSS from '../Solved-Or-SendSolution/Component-ServiceId-SolvedoSS';
import SeveralInputButtonRef from '../../SeveralInputButtonRef';


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


    const fun = (valor1,valor2)=>{
      console.log('el valor1...: ',valor1,'  valor2 : ',valor2)

    }



    let salida = props.solucionadores?.map((item,index)=>{



        return (
                    <div className="two-elements">

                        <div className="several-elements">
                                <div name="img-user">
                                  <img onClick={()=>{miFun(ver,index)}} id='icono' name="solucionadores" className="show-services-list-span" src={imagen}/>
                                  <span>{item.usuario}</span>
                                </div>
                                <div className="solver-files">
                                    <span><Component_ServiceId_SolvedoSS confirmar={true} ficheros={item.files} /></span>
                                </div>

                        </div>
                        <div className="several-elements">
                        {elIndex === index ?
                          <div name={changeStyle}>
                            <SeveralInputButtonRef funcion={fun}/>
                          </div> : <div name= "ocultar">
                            <SeveralInputButtonRef funcion={fun}/>
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
