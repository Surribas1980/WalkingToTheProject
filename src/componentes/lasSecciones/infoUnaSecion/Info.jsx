import React from 'react';
import Docs from '../../../images/UnaSeccion/docs.png';
import DocsOk from '../../../images/UnaSeccion/docsOk.png';
import Folder from '../../../images/UnaSeccion/folder.png';
function Info(){
  return(
    <>{console.time('loop')}
      <div id="info">
        <img src={Docs} alt="Imagen de docs"/>
        <span>Nº de mis servicios</span>
      </div>
      <div id="info">
        <img src={DocsOk} alt="Imagen de docsOk"/>
        <span>Nº de mis servicios solucionados</span>
      </div>
      <div id="info">
        <img src={Folder} alt="Imagen de folders"/>
        <span>Total sin resolver</span>
      </div>
      {console.timeEnd('loop')}
    </>)
}

export default Info;
