import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { Link } from "react-router-dom";

>>>>>>> 9dd0831d9fa938ca6609e7fa0c6299bc5902953b
import Docs from '../../../images/UnaSeccion/docs.png';
import DocsOk from '../../../images/UnaSeccion/docsOk.png';
import Folder from '../../../images/UnaSeccion/folder.png';
function Info(){
  return(
    <>{console.time('loop')}
<<<<<<< HEAD
    <div id='info-position-relative'>
      <div id="info">
        <img src={Docs} alt="Imagen de docs"/>
        <Link to="/myservices"><span>Nº de mis servicios</span></Link>
      </div>
=======
    <Link name="info" to="/myservices">
      <div id='info-position-relative'>
        <div id="info">
            <img src={Docs} alt="Imagen de docs"/>
            <span>Nº de mis servicios</span>
        </div>
>>>>>>> 9dd0831d9fa938ca6609e7fa0c6299bc5902953b

      </div>
    </Link>
    <Link name="info" to="/myservicessolutioned">
        
      <div id='info-position-relative'>

        <div id="info">
            <img src={DocsOk} alt="Imagen de docsOk"/>
            <span>Nº de mis servicios solucionados</span>
        </div>
      </div>
    </Link>

    <Link name="info" to="/services">
        
      <div id='info-position-relative'>
        <div id="info">
            <img src={Folder} alt="Imagen de folders"/>
            <span>Total sin resolver</span>
        </div>
      </div>
    </Link>

      {console.timeEnd('loop')}
    </>)
}

export default Info;
