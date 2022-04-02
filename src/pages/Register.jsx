import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import ElPopUp from '../componentes/ElPopUp';
import FormN from '../componentes/FormN';
export default function Register() {
  const { register, handleSubmit } = useForm();

  const [res, setRes] = useState(false);
  const [boton, setBoton] = useState(false);
  console.log('boton');
  return (
    <div>
      <FormN setRes={setRes} setBoton={setBoton} />
      {/*boton === true ? <Boton elEstado={setBoton} /> : ' '*/}
      {boton === true ? (
        <ElPopUp respuestaBack={res} elEstado={setBoton} />
      ) : (
        ' '
      )}
    </div>
  );
}
