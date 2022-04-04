import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Main from '../elMain/Main';
export default function Header({ children }) {
  return (
    <>
      <nav className="divFlex borderColorBottom">
        <div>
          <Link className="margin10" to="/">
            Logo
          </Link>
        </div>
        <div className="separateLogo">
          <Link className="margin10" to="/login">
            Login
          </Link>
        </div>
        <div>
          <Link className="margin10" to="/register">
            Register
          </Link>
        </div>
        <div>
          <Link className="margin10" to="/">
            Main
          </Link>
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
