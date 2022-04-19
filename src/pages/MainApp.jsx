import React from 'react';
import Usuarios from './Usuarios';

import UnaSeccion from '../componentes/lasSecciones/UnaSeccion';
import DosSeccion from '../componentes/lasSecciones/DosSeccion';
import TresSeccion from '../componentes/lasSecciones/TresSeccion';
import HeaderApp from '../componentes/HeaderApp';
import Notices from '../componentes/losAvisos/Notices';
import Info from '../componentes/lasSecciones/infoUnaSecion/Info';
import ChartRanking from '../componentes/lasSecciones/infoDosSeccion/ChartRanking';
function MainApp(){


  return (
    <>{console.time('loop')}
    <HeaderApp>
      <Notices />
    </HeaderApp>

    <UnaSeccion>

      <Info />
    </UnaSeccion>
    <DosSeccion>
     <ChartRanking />
    </DosSeccion>
    <TresSeccion>
      el children desde MainApp en TresSeccion
      <Usuarios />
    </TresSeccion>
{console.timeEnd('loop')}
    </>);

}

export default MainApp;
