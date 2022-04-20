import React from "react";
import {Routes, Route, Link, Outlet} from "react-router-dom";
import MainApp from "../../pages/MainApp";
import MyServicesM from "../../pages/MyServices/MyServicesM";
import Services from "../../pages/Services/Services";
import Usuarios from '../../images/menuApp_Footer/grupo-de-usuarios.png';
import Usuario from '../../images/menuApp_Footer/perfil.png';
import Home from '../../images/menuApp_Footer/hogar.png';

function RoutesFooterApp(){
    return(
    <>
    <div id="navegation-footer-app" className="ocultarDatos">
        <Link to="/myservices"><img src={Usuario} alt="enlace user"/></Link>
        <Link to="/services"><img src={Usuarios} alt="usuarios"/></Link>
        
        <Link to="/mainapp"><img src={Home} alt="Home"/></Link>
    </div>

    </>
    )
}

export default RoutesFooterApp;