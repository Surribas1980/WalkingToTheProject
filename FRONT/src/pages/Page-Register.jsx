import React, { useState } from 'react';
import useAuth from '../shared/hooks/useAuth';
import {creoUser} from '../_firebase';
import ElPopUp from '../componentes/ElPopUp';
import FormN from '../componentes/FormN';

export default function Register() {
  const [res, setRes] = useState(false);
  const [boton, setBoton] = useState(false);
  const {auth} = useAuth('');  
  const [datos, setDatos] = useState({});
  console.log('auth: ',auth)
  const onSubmit = (data) => {
    setDatos(JSON.stringify(data));
    console.log('datos : ',data)
    if (data.email != ' ' || data.email != '' && data.pwd != null) {
      setRes(true);
      creoUser(auth,data.email,data.pwd)
    } else {
      setRes(false);
    }
    setBoton(true);
  };
  return (
    <>
      <FormN setRes={setRes} setBoton={setBoton} elSubmit={onSubmit}/>
      {boton === true ? (
        <ElPopUp respuestaBack={res} elEstado={setBoton} />
      ) : (
        ' '
      )}
    </>
  );
}
