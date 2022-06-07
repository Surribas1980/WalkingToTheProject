import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../shared/hooks/useAuth';
import { theFormData } from '../helpers/misHelpers';
import { envioWithFiles, envioDatos } from '../http/api';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');
  const { sigIn } = useAuth();
  const onSubmit = (data) => {
    setData(JSON.stringify(data));
    sigIn( data.mail, data.pwd);
  };

  return (
    <div className="vh50 ">

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('mail')} placeholder="Introduce mail" />
        <input
          {...register('pwd')}
          placeholder="Introduce password"
          type="password"
        />

        <input type="submit" />
      </form>
    </div>
  );
}
