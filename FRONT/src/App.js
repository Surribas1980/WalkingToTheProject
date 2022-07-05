import React,{useState} from 'react';
import UtilizoHook from './componentes/conHooks/UtilizoHook';
import Header from './componentes/elHeader/Header';
import Footer from './componentes/elFooter/Footer';
import { AuthProvider } from './shared/context/authContex';
import { initializeApp } from "firebase/app";
import {firebaseConfig} from './_firebase';
import './style.css';

const app = initializeApp(firebaseConfig);
export default function App() {
const [styleBody, setStyleBody] = useState('body-default')
  
  return (
    <div className=''>
      <AuthProvider>
        <UtilizoHook>
        <div className='' id={styleBody}>
          <Header funChangeStyle={setStyleBody} />
          <Footer />
        </div>
          
        </UtilizoHook>
      </AuthProvider>
      
     
    </div>
  );
}
