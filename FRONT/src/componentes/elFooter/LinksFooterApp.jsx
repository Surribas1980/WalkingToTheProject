import React from "react";
import { Link } from "react-router-dom";

import Usuarios from '../../images/menuApp_Footer/grupo-de-usuarios.png';
import Usuario from '../../images/menuApp_Footer/perfil.png';
import Home from '../../images/menuApp_Footer/hogar.png';
import Lista from '../../images/menuApp_Footer/lista-de-tareas.png';
function LinksFooterApp(){

    return(
        <div id="navegation-footer-app" className="ocultarDatos">
        <Link to="/myservices"><img className="img-nav-footer-app" src={Usuario} alt="enlace user"/></Link>
        <Link to="/services"><img className="img-nav-footer-app" src={Usuarios} alt="usuarios"/></Link>
        <Link to="/mainapp"><img className="img-nav-footer-app" src={Home} alt="Home"/></Link>
        <Link to="/tasklist"><img className="img-nav-footer-app" src={Lista} alt="Home"/></Link>
    
    </div>)
}

export default LinksFooterApp;