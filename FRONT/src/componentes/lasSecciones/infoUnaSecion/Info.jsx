import React from 'react';
import { Link } from 'react-router-dom';
import Docs from '../../../images/UnaSeccion/docs.png';
import DocsOk from '../../../images/UnaSeccion/docsOk.png';
import Folder from '../../../images/UnaSeccion/folder.png';
function Info(){
  return(
    <>{console.time('loop')}
    <div id='info-position-relative'>
      <div id="info">
        <img src={Docs} alt="Imagen de docs"/>
        <Link to="/myservices"><span>Nº de mis servicios</span></Link>
      </div>

    </div>
    <div id='info-position-relative'>

      <div id="info">
        <img src={DocsOk} alt="Imagen de docsOk"/>
        <span>Nº de mis servicios solucionados</span>
      </div>
    </div>
    <div id='info-position-relative'>

      <div id="info">
        <img src={Folder} alt="Imagen de folders"/>
        <span>Total sin resolver</span>
      </div>
    </div>
      {console.timeEnd('loop')}
    </>)
}

export default Info;