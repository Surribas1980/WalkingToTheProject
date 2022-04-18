import React from 'react';
import Usuarios from './Usuarios';

import UnaSeccion from '../componentes/lasSecciones/UnaSeccion';
import DosSeccion from '../componentes/lasSecciones/DosSeccion';
import TresSeccion from '../componentes/lasSecciones/TresSeccion';
import HeaderApp from '../componentes/HeaderApp';
import Notices from '../componentes/losAvisos/Notices';

function MainApp(){


  return (
    <>
    <HeaderApp>
      <Notices />

    </HeaderApp>
    Estoy en MainApp
    <UnaSeccion>
      el children desde MainApp en UnaSeccion
    </UnaSeccion>
    <DosSeccion>
      el children desde MainApp en DosSeccion
    </DosSeccion>
    <TresSeccion>
      el children desde MainApp en TresSeccion
      <Usuarios />
    </TresSeccion>

    </>);

}

export default MainApp;
