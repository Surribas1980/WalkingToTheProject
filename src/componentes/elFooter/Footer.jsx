import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import GenericBoton from '../GenericBoton';
function Footer() {
  const Up = ()=>{
    scroll.scrollToTop();
  }
  let styleButtom = "alignCenter theRoboto weight-letter-bold";
  let styleDiv = "divFlex alignCenter justifyContentCenter toBottom0 positionStyke zIndexTest2 colorWhite";
  let idStyleButton = "button-default";
  return (

    <><div>
        <h1>
         El footer
        </h1>
        <div>
          dentro de otro div
        </div>
        <div>
          tercero de otro div
        </div>
      </div>

    <GenericBoton id={idStyleButton} styleDiv={styleDiv} newFunction={Up} estilo={styleButtom} />

    </>


  );
}

export default Footer;
