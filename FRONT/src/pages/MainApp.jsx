import React,{useState} from 'react';
import useAuth from '../shared/hooks/useAuth';
import Usuarios from './Usuarios';

import UnaSeccion from '../componentes/lasSecciones/UnaSeccion';
import DosSeccion from '../componentes/lasSecciones/DosSeccion';
import TresSeccion from '../componentes/lasSecciones/TresSeccion';

import Page_MyServices from './Services/MyServices/Page-MyServices.jsx';

import Info from '../componentes/lasSecciones/infoUnaSecion/Info';
import ChartRanking from '../componentes/lasSecciones/infoDosSeccion/ChartRanking';
import Page_Services from './Services/Page-Services';

import {myServices} from '../data.js'


function MainApp(){
  const { user } = useAuth('');
  const [misServicios, setMisServicios] = useState(myServices())

  return (
    <>{console.time('loop')}


    <UnaSeccion>

      <Info />
    </UnaSeccion>
    <DosSeccion>
     <ChartRanking />
     <Usuarios />
    </DosSeccion>
    <TresSeccion>
      {/*<Page_Services usuario={user} misservicios={misServicios}/>*/}
      <Page_MyServices />
    </TresSeccion>

{console.timeEnd('loop')}
    </>);

}

export default MainApp;
