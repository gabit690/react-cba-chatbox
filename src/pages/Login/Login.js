import React, { useState } from 'react';
import Title from './components/Title/Title';
import Label from './components/Label/Label';
import Input from './components/Input/Input';

import './Login.css'

const Login = () => {

  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordError, setPasswordError ] = useState(false);
  const [ isLogin, setIsLogin ] = useState(false);
  const [ hasError, setHasError ] = useState(false);

  function handleChange(name, value) {
    if(name === 'usuario') {
      setUser(value);
      setHasError(false);
    } else {
      if (value.length < 6) {
        setPasswordError(true);
        setHasError(false);
      } else {
        setPasswordError(false);
        setPassword(value);
        setHasError(false);
      }
    }
  }

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === 'Admin' && param.password === '123456') {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem('account', account);
        setIsLogin(true);
      } else {
          setIsLogin(false);
          setHasError(true);
      }
    } else {
        setIsLogin(false);
        setHasError(true);
    }
  }

  function handleSubmit() {
    let account = { user, password };
    if (account) {
      ifMatch(account);
    }
  }

  return (
    <div className='loginContainer'>
    { isLogin ? 
        <div className='homeContainer'>
          <h1>¡Hola, {user}</h1>
          <Label text='Felicitaciones, estás logueado.' styles='homeLabel' />
        </div>
      :
      <div className='loginContent'>
        <Title text='¡Bienvenid@!' />
        {
          hasError &&
          <Label 
            text='Su contraseña o usuario son incorrectos, o no existen en nuestra plataforma.' 
            styles='labelAlert' 
          />
        }
        <Label 
          text='Usuario'
          styles='loginLabel' 
        />
        <Input
        attribute= {{
          id: 'usuario',
          name: 'usuario',
          type: 'text',
          placeholder: 'Ingrese su usuario'
        }}
        handleChange={handleChange}
        />
        <Label
        text='Contraseña'
        styles='loginLabel'
        />
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
        { passwordError && 
          <Label 
            text='Contraseña inválida o incompleta' styles='labelError'
          />
        }
        <button className='loginButton' onClick={handleSubmit}>
          Ingresar
        </button>
      </div>

    }
    </div>
  );
};

export default Login;