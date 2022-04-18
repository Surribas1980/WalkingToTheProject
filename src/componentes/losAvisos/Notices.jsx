import React from 'react';
import Campana from '../../images/menu/campana.png';
import Correo from '../../images/menu/correo.png';
function Notices(){
  return (<>
    <div id='img-header-default'>
      <div className="positionAbsolute">
        <div id='number-notice'>1</div>
      </div>
      <img src={Campana} className="tamanio" />

    </div>
    <div id='img-header-default'>
      <div className="positionAbsolute"><div id='number-notice'>1</div></div>
      <img src={Correo} className="tamanio" />
    </div>
    </>)
}

export default Notices;
