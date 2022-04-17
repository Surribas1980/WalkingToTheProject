import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

/*export const AuthContext = React.createContext();*/
export const AuthContext = createContext();
const AuthContextProvider = AuthContext.Provider;

export function AuthProvider({ children }) {
  const [user, setUser] = useState('ocultarTitulos');
  let navigate = useNavigate();
  let sigIn = (mail, pwd) => {

    if(mail == 'logeado'){
      setUser('logeado');
      navigate('/mainapp');
    }
  };

  const logOut = () => {
    setUser('fuera');
    navigate('/');
  };

  return (
    <AuthContextProvider value={{ user, sigIn, logOut }}>
      {children}
    </AuthContextProvider>
  );
}
