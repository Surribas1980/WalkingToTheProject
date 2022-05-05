import React,{useState,useEffect} from 'react';
import GenericImageOnClick from './GenericImageOnClick';
import GenericFormTextArea from './GenericFormTextArea';
import Conversacion from '../images/conversacion.png';
import Solucionado from '../images/think.png';
import GenericBoton from './GenericBoton';
import Charla from '../images/charla0.png';
function SendMessageWithIcon(props){
const [ver,setVer] = useState(false);
const [anchura,setAnchura] = useState(false);

/*let formulario = <GenericFormTextArea idDivForm="generic-form-text-area" />;*/
const changedVer = ()=>{
  let valor = ver;
  setVer(!valor)
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
    <div className="services-task-id-group">
      {

        props.solutioned === true ? <GenericBoton styleDiv="services-button"  texto="Ver solución"/> : <GenericImageOnClick idDivImg="generic-image-on-click"  srcImg={Solucionado} functionImg={changedVer} />
      }

      {
        anchura === false ?  <GenericImageOnClick idDivImg="generic-image-on-click" srcImg={Conversacion} functionImg={changedVer} /> : ''
      }
      {
        (props.conversation === true) ? <GenericImageOnClick idDivImg="generic-image-on-click" srcImg={Charla} functionImg={changedVer} /> : ''
      }

    </div>
     <div>

      {ver === true ? <GenericFormTextArea idDivForm="generic-form-text-area" /> : ''}
     </div>
    </>
  )
}

export default SendMessageWithIcon;
