import React,{useState} from 'react';
import {animateScroll as scroll} from 'react-scroll';
import UtilizoHook from './componentes/conHooks/UtilizoHook';
import Header from './componentes/elHeader/Header';

import Footer from './componentes/elFooter/Footer';
import { AuthProvider } from './shared/context/authContex';

import './style.css';
import GenericBoton from './componentes/GenericBoton';

export default function App() {
const [styleBody, setStyleBody] = useState('body-default')
  const Up = ()=>{
    scroll.scrollToTop();
  }
  let styleButtom = "borderNone width5vw-change7 fondoAzulete  alignCenter theRoboto weight-letter-bold";
  let styleDiv = "divFlex alignCenter justifyContentCenter"
  return (
    <div className=''>
      <AuthProvider>
        <UtilizoHook>
        <div className='' id={styleBody}>
          <Header funChangeStyle={setStyleBody} />
          <Footer />
        </div>
          {/*<Footer />*/}
        </UtilizoHook>
      </AuthProvider>
      <div className='toBottom0 positionStyke zIndexTest2'>

      <GenericBoton styleDiv={styleDiv} newFunction={Up} estilo={styleButtom} newForm={'boton from App'}></GenericBoton>
      </div>
     
    </div>
  );
}
