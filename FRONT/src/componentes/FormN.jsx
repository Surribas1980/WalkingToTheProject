import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function FormN(props) {
  const { register, handleSubmit } = useForm();
/*  const { register, handleSubmit } = useForm();
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
*/
  return (
    <div className="vh50">
      <form onSubmit={handleSubmit(props.elSubmit)}>
        <input {...register('email')} placeholder="Introduce un email" />
        <input
          {...register('pwd')}
          placeholder="Introduce un pwd"
          type="text"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default FormN;
