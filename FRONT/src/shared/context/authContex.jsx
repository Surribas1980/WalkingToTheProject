import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth , signInWithEmailAndPassword } from 'firebase/auth';
import {signInFirebase} from '../../_firebase'
const auth = getAuth();
/*export const AuthContext = React.createContext();*/
export const AuthContext = createContext();
const AuthContextProvider = AuthContext.Provider;

export function AuthProvider({ children }) {
  const [user, setUser] = useState('ocultarTitulos');
  let navigate = useNavigate();
  let sigIn = (mail, pwd) => {
    signInWithEmailAndPassword(auth, mail, pwd)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      console.log('logueado ?', user.emailVerified);
      if(user.emailVerified === true){
      setUser('logeado');
      navigate('/mainapp');
    }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    /*if(mail == 'logeado'){
      setUser('logeado');
      navigate('/mainapp');
    }*/
  };

  const logOut = () => {
    setUser('fuera');
    navigate('/');
  };

  return (
    <AuthContextProvider value={{ user,auth, sigIn, logOut }}>
      {children}
    </AuthContextProvider>
  );
}
