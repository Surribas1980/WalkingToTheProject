import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import GenericBoton from '../GenericBoton';
function Footer() {
  const Up = ()=>{
    scroll.scrollToTop();
  }
  let styleButtom = "borderNone width5vw-change7 fondoAzulete  alignCenter theRoboto weight-letter-bold";
  let styleDiv = "divFlex alignCenter justifyContentCenter toBottom0 positionStyke zIndexTest2 colorWhite fondoVerde";
  return (
 
    <><div>
        <h1>
         El footer
        </h1>
        <div>
          dentro de otro div
        </div>
      </div>
    
    <GenericBoton styleDiv={styleDiv} newFunction={Up} estilo={styleButtom} newForm={'boton from App'}/>
    
    </>
    
    
  );
}

export default Footer;
