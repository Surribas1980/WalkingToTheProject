import React,{useState} from 'react';
import GenericImageOnClick from './GenericImageOnClick';
import GenericFormTextArea from './GenericFormTextArea';
import Conversacion from '../images/conversacion.png';

function SendMessageWithIcon(){
const [ver,setVer] = useState(false);

/*let formulario = <GenericFormTextArea idDivForm="generic-form-text-area" />;*/
const changedVer = ()=>{
  let valor = ver;
  setVer(!valor)
}
  return (
    <>
      <GenericImageOnClick idDivImg="generic-image-on-click" srcImg={Conversacion} functionImg={changedVer} />
      {ver === true ? <GenericFormTextArea idDivForm="generic-form-text-area" /> : ''}
    </>
  )
}

export default SendMessageWithIcon;
