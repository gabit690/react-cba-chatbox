import React from 'react';
import Title from './components/Title/Title';
import Label from './components/Label/Label';

const Login = () => {
  return (
    <div>
      <Title text='Soy un titulo' />
      <Label text='Usuario' />
      <Label text='Contraseña' />
    </div>
  );
};

export default Login;