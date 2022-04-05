import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function FormN({ setRes, setBoton }) {
  const { register, handleSubmit } = useForm();
  const [datos, setDatos] = useState({});

  const onSubmit = (data) => {
    setDatos(JSON.stringify(data));

    if (datos.unnombre === 'Israel') {
      setRes(true);
    } else {
      setRes(false);
    }
    setBoton(true);
  };

  return (
    <div className="vh50 fondoAzulete">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('unnombre')} placeholder="Introduce un Nombre" />
        <input
          {...register('unprimerApellido')}
          placeholder="Introduce un primer apellido"
          type="text"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default FormN;
