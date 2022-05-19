import React,{useState,useEffect} from 'react';
import GenericImageOnClick from './GenericImageOnClick';
import GenericFormTextArea from './GenericFormTextArea';
import Conversacion from '../images/conversacion.png';
import Solucionado from '../images/think.png';
import GenericBoton from './GenericBoton';
import Charla from '../images/charla0.png';
import Auxiliary_Page_ServiceId_Solved_Or_SendSolution from '../pages/Services/ServicesId-Solved-Or-SendSolution/Auxiliary-Page-ServiceId-Solved-Or-SendSolution';
function SendMessageWithIcon(props){
  const [ver,setVer] = useState(false);
  const [anchura,setAnchura] = useState(false);
  const [enviarSendSolved,setSendSolved] = useState(false);
  const [conversa,setConversa] = useState(false);

const changedVer = ()=>{
  let valor = ver;
  setVer(!valor)
}
const Solve = () =>{
  let valor = enviarSendSolved;
  setSendSolved(!valor);
}
const Conversation = ()=>{
  let valor = conversa;
  setConversa(!valor);
  console.log('props: ',conversa,props)
}
console.log('screen.width',screen.width)
useEffect(()=>{
  if(screen.width > 600){
    setVer(true);
    setAnchura(true);/**/
  }
},[screen.width])
  return (
    <>
      
      <>
        <div className="services-task-id-group">
                            {
                              props.solutioned === true ? <GenericBoton styleDiv="services-button"  texto="Ver solución"/> : <GenericImageOnClick idDivImg="generic-image-on-click"  srcImg={Solucionado} functionImg={Solve} />
                            }

                            {
                              anchura === false ?  <GenericImageOnClick idDivImg="generic-image-on-click" srcImg={Conversacion} functionImg={changedVer} /> : ''
                            }
                            
                          <GenericImageOnClick idDivImg="generic-image-on-click" srcImg={Charla} functionImg={Conversation} />
        </div>
      </>
     <div>

      {ver === true ? <GenericFormTextArea idDivForm="generic-form-text-area" /> : ''}
      {enviarSendSolved === true ? '' : <Auxiliary_Page_ServiceId_Solved_Or_SendSolution />}
      {conversa === true ? <>{props.conversas}</> : ''}
      
     </div>
    </>
  )
}

export default SendMessageWithIcon;
