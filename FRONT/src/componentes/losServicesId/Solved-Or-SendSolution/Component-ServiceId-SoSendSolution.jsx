import React,{useRef} from "react";
import { envioDatos } from "../../../http/api";
import { theFormData } from '../../../helpers/misHelpers';

/*--- misHelpers ---*/
import { method } from '../../../http/method';
import { endpoints } from '../../../http/endpoints';

function Component_ServiceId_SoSendSolution(props){
  const theInput = useRef(null);

  const SendSolution = async (data)=>{
    console.log('SendSolution: ', theInput.current.files)
    const losFich = {
      ficheros: theInput.current.files
    }
    const datos = {
      form: theFormData(losFich,0),
      endpoint: endpoints.sendServiceSolution,
      method: method.post,
      id:props.id
    }

    console.log('los ficheros: ',losFich)
    const valorrespuesta = await envioDatos(datos,'form');
    console.log('valorrespuesta : ',valorrespuesta)

  }

    return(<>
    <div>

    <div>Enviar Solución</div>
      <input name="solution" ref={theInput} multiple type="file" placeholder="otro"/>
      <button name="solution" onClick={()=>{SendSolution(theInput.current.value)}}>Enviar</button>

    </div>
    </>)

}

export default Component_ServiceId_SoSendSolution;
