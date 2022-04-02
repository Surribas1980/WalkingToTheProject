import React from 'react';

import UtilizoHook from './componentes/conHooks/UtilizoHook';
import Header from './componentes/elHeader/Header';
import { AuthProvider } from './shared/context/authContex';

import './style.css';

export default function App() {
  return (
    <div>
      <AuthProvider>
        <UtilizoHook>
          <Header />
        </UtilizoHook>
      </AuthProvider>
    </div>
  );
}
