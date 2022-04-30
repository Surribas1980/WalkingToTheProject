import React, {useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Main from '../elMain/Main';
import NavBar from '../elNavBar/NavBar';


export default function Header( props ,{children}) {

  const [toogleNavBar, setToogleNavBar] = useState(true);
  const [botonMobile,setBotonMobil] = useState(false);


  const bodyStyle = (styleBody,boton) =>{
    props.funChangeStyle(styleBody)
    setBotonMobil(!boton);

  }

  const elMenu = (valor) => {

    if (valor) {
      setToogleNavBar(false);
    }else{
      setToogleNavBar(true);
    }
  }

  const isMore_600 = (width,link)=>{

      if(width > 600){
        if(link === 'Main' || link === 'Logo'){
          setToogleNavBar(true)
        }else{
          setToogleNavBar(false)
        }
      }
  }
  return (
    <>
      <nav  className="borderColorBottom theRoboto ">
        <ul id='navegation-default'>
            <li className="div-click-default" onClick={()=>{bodyStyle('body-default',botonMobile)}}>&nbsp;</li>
            <li>
              <Link name="iconos" onClick={()=>{
              bodyStyle('body-default',true)
              isMore_600(screen.width,'Logo')

            }} to="/">
                Logo
              </Link>
            </li>

          { (botonMobile === false)  ?
            <>
                  <li>
                {
                  <div className="div-click-default" onClick={()=>{elMenu(toogleNavBar)}} >&nbsp;</div>
                }
                    { toogleNavBar === true ? <NavBar /> : ''}

                  </li>
                  <li>
                          <Link name="iconos" onClick={()=>{
                            bodyStyle('body-form-default',true);
                            isMore_600(screen.width,'Login');

                         }} className="" to="/login">
                            Login
                          </Link>
                  </li>
                  <li>
                          <Link name="iconos" onClick={()=>{
                            bodyStyle('body-form-default',true);
                            isMore_600(screen.width,'Register')

                          }} to="/register">
                            Register
                          </Link>
                  </li>
                  <li>
                          <Link name="iconos" onClick={()=>{
                            bodyStyle('body-default',true)
                            isMore_600(screen.width,'Main')

                          }} to="/">
                            Main
                          </Link>
                  </li>

          </>
           : ''}
        </ul>
      </nav>
      <Routes>
          <Route path={'/login'} element={<Login />}></Route>
          <Route path={'/register'} element={<Register />}></Route>
          <Route path={"/"}  element={<Main />}></Route>
      </Routes>
    </>
  );
}
