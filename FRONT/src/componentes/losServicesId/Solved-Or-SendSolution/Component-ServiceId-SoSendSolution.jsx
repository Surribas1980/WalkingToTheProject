import React,{useRef} from "react";

function Component_ServiceId_SoSendSolution(props){
  const theInput = useRef(null);

  const SendSolution = (data)=>{
    console.log('SendSolution: ', data,theInput.current.files,theInput.current.files[0])
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
