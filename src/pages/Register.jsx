import React, { useState } from 'react';
import ElPopUp from '../componentes/ElPopUp';
import FormN from '../componentes/FormN';
export default function Register() {
  const [res, setRes] = useState(false);
  const [boton, setBoton] = useState(false);

  return (
    <div>
      <FormN setRes={setRes} setBoton={setBoton} />
      {boton === true ? (
        <ElPopUp respuestaBack={res} elEstado={setBoton} />
      ) : (
        ' '
      )}
    </div>
  );
}
