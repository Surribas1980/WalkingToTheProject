import React, {useState,useEffect} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Main from '../elMain/Main';
import NavBar from '../elNavBar/NavBar';
export default function Header( props ,{children}) {

  const [toogleNavBar, setToogleNavBar] = useState(true);
  const [botonMobile,setBotonMobil] = useState(true);


    useEffect(()=>{

    screen.width > 600 === true ? setBotonMobil(false) : '';
    },[])



  const bodyStyle = (styleBody,boton) =>{
    props.funChangeStyle(styleBody)
    styleBody === 'body-default' ? setToogleNavBar(true) : setToogleNavBar(false);
    boton === botonMobile ? setBotonMobil(!boton) : '';
  }

  return (
    <>
      <nav id='navegation-default' className="borderColorBottom theRoboto ">
        <div className="div-click-default" onClick={()=>{bodyStyle('body-default',botonMobile)}}>boton
        </div>
        <div>
          <Link onClick={()=>{bodyStyle('body-default',false)}} to="/">
            Logo
          </Link>
        </div>

      { (botonMobile === false)  ?
        <>
              <div>

                { toogleNavBar === true ? <NavBar /> : ''}
              </div>


              <div id='navegation-default' >

                    <div >
                      <Link onClick={()=>{bodyStyle('body-form-default',false) }} className="" to="/login">
                        Login
                      </Link>
                    </div>
                    <div>
                      <Link onClick={()=>{bodyStyle('body-form-default',false)}} to="/register">
                        Register
                      </Link>
                    </div>
                    <div>
                      <Link onClick={()=>{bodyStyle('body-default',false)}} to="/">
                        Main
                      </Link>
                    </div>
            </div>
      </>
       : ''}
      </nav>
      <Routes>
        <Route path={'/login'} element={<Login />}></Route>
        <Route path={'/register'} element={<Register />}></Route>
        <Route path={'/'} element={<Main />}></Route>
      </Routes>
    </>
  );
}
