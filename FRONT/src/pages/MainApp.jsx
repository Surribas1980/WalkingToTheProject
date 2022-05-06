import React from 'react';
import Usuarios from './Usuarios';

import UnaSeccion from '../componentes/lasSecciones/UnaSeccion';
import DosSeccion from '../componentes/lasSecciones/DosSeccion';
import TresSeccion from '../componentes/lasSecciones/TresSeccion';

import Info from '../componentes/lasSecciones/infoUnaSecion/Info';
import ChartRanking from '../componentes/lasSecciones/infoDosSeccion/ChartRanking';

function MainApp(){


  return (
    <>{console.time('loop')}
   

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
