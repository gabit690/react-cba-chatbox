import React, { useState } from 'react';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';

import './Login.css'

const Login = () => {

  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordError, setPasswordError ] = useState(false);

  function handleChange(name, value) {
    if(name === 'usuario') {
      setUser(value);
    } else {
      if (value.length < 6) {
        setPasswordError(true);
      } else {
        setPassword(value);
        setPasswordError(false);
      }
    }
  }

  function handleSubmit() {
    let account = { user, password};
    if (account) {
      console.log('Account: ', account)
    }
  }

  return (
    <div className='loginContainer'>
      <Title text='Soy un titulo' />
      <Label text='Usuario' />
      <Input
       attribute= {{
        id: 'usuario',
        name: 'usuario',
        type: 'text',
        placeholder: 'Ingrese su usuario'
       }}
       handleChange={handleChange}
      />
      <Label text='Contraseña' />
      <Input
       attribute= {{
        id: 'contraseña',
        name: 'contraseña',
        type: 'password',
        placeholder: 'Ingrese su contraseña'
       }}
       handleChange={handleChange}
       param={passwordError}
      />
      <button onClick={handleSubmit}>
        Ingresar
      </button>
    </div>
  );
};

export default Login;