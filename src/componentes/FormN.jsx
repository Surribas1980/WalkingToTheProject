import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function FormN({ setRes ,setBoton}) {
  const { register, handleSubmit } = useForm();
  /*const [data, setData] = useState('');*/
  const [datos, setDatos] = useState({});

  const onSubmit = (data) => {
    /*setData(JSON.stringify(data));*/
    console.log('datos de entrada : ', data, JSON.stringify(data));
    setDatos(JSON.stringify(data));
    console.log(
      'los datos de nombre y apellidos: ',
      datos,
      datos.unnombre,
      datos.unprimerApellido
    );
    if (data.unnombre === 'Israel') {
      setRes(true);
      setBoton(true)
    } else {
      setRes(false);
      setBoton(false);
    }
  };

  return (
    <div>
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
