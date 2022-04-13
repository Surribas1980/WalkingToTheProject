import React, {useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Main from '../elMain/Main';
import NavBar from '../elNavBar/NavBar';
export default function Header( props ,{children}) {

  const [toogleNavBar, setToogleNavBar] = useState(true);

  const bodyStyle = (styleBody) =>{
    props.funChangeStyle(styleBody)
    styleBody === 'body-default' ? setToogleNavBar(true) : setToogleNavBar(false);
  }

  return (
    <>
      <nav id='navegation-default' className="borderColorBottom theRoboto ">
        <div>
          <Link onClick={()=>{bodyStyle('body-default')}} to="/">
            Logo
          </Link>
        </div>
        <div>

          { toogleNavBar === true ? <NavBar /> : ''}
        </div>
        <div id='navegation-default' >

          <div >
            <Link onClick={()=>{bodyStyle('body-form-default') }} className="" to="/login">
              Login
            </Link>
          </div>
          <div>
            <Link onClick={()=>{bodyStyle('body-form-default')}} to="/register">
              Register
            </Link>
          </div>
          <div>
            <Link onClick={()=>{bodyStyle('body-default')}} to="/">
              Main
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path={'/login'} element={<Login />}></Route>
        <Route path={'/register'} element={<Register />}></Route>
        <Route path={'/'} element={<Main />}></Route>
      </Routes>
    </>
  );
}
