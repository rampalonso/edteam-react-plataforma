import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import env from 'config/env';

const signUp = (e) => {
  e.preventDefault();
  const form = e.target;
  axios.post(`${env.apiAuthUrl}/signup`, {
    name: form.fullName.value,
    email: form.email.value,
    password: form.password.value,
  }).then(response => {
    alert('Usuario creado');
    window.location = '/login';
  }).catch(e => {
    console.log(e)
  })
}

const Register = () => (
  <div className="ed-grid">
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Crear cuenta</h1>
      <form onSubmit={signUp.bind()}>
        <div className="form__item">
          <label htmlFor="fullName">
            Nombre completo
            <input type="text" id="fullName" name="fullName" required />
          </label>
        </div>
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
          <input type="submit" className="button full" value="Crear cuenta" />
        </div>
      </form>
      <div className="center">
        <p>¿Ya tienes una cuenta de usuario?<Link to="/login"> Iniciar sesion</Link></p>
      </div>
    </div>
  </div>
)

export default Register;
