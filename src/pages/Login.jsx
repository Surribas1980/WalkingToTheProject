import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../shared/hooks/useAuth';
export default function Login() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');
  const { sigIn } = useAuth();
  const onSubmit = (data) => {
    setData(JSON.stringify(data));
    sigIn( data.mail, data.pwd);
    //console.log('data,data.pwd, data.mail', data, data.pwd, data.mail);
  };

  return (
    <div className="vh50 fondoAzulete">

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
