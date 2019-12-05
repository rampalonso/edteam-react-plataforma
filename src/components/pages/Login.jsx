import React from 'react'
import { Link } from "react-router-dom";

import axios from 'axios';

import env from 'config/env';

const signIn = (e) => {
  e.preventDefault();
  const form = e.target;
  axios.post(`${env.apiAuthUrl}/login`, {
    email: form.email.value,
    password: form.password.value,
  }).then(response => {
    localStorage.setItem('_token', response.data.token);
    window.location = "/";
  }).catch(e => {
    console.log(e)
  })
}

const Login = () => (
  <div className="ed-grid">
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Iniciar sesion</h1>
      <form onSubmit={signIn.bind()}>
        <div className="form__item">
          <label htmlFor="email">
            Correo electronico
            <input type="email" id="email" name="email" required />
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="password">
            Contraseña
            <input type="password" id="password" name="password" required />
          </label>
        </div>
        <div className="form__item">
          <input type="submit" className="button full" value="Iniciar sesion" />
        </div>
      </form>
      <div className="center">
        <p>¿No tienes cuenta de usuario?<Link to="/registro"> Crear cuenta</Link></p>
      </div>
    </div>
  </div>
)

export default Login;
