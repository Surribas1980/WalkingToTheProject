import React from 'react';
import useAuth from '../../shared/hooks/useAuth';

import FooterIndexApp from '../elFooter/FooterIndexApp';
import HeaderIndexApp from '../elHeader/HeaderIndexApp';
import RutasApp from '../lasRutasApp/RutasApp';

export default function UtilizoHook({ children }) {
  const { user } = useAuth('');
  return (
    <>
      {user === 'logeado' ? (<>
        <HeaderIndexApp />
        <RutasApp />
        <FooterIndexApp />
        </>
      ) : (
        children
      )}
    </>
  );
}
