import React from "react";
import { Link } from "react-router-dom";
import Usuarios from '../../images/menuApp_Footer/grupo-de-usuarios.png';
import Usuario from '../../images/menuApp_Footer/perfil.png';
import Home from '../../images/menuApp_Footer/hogar.png';
function LinksFooterApp(){

    return(
    <div id="navegation-footer-app" className="ocultarDatos">
    <Link to="/user"><img src={Usuario} alt="enlace user"/></Link>
    <Link to="/services"><img src={Usuarios} alt="usuarios"/></Link>
    <Link to="/mainapp"><img src={Home} alt="Home"/></Link>
    </div>)
}

export default LinksFooterApp;