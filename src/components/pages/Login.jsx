import React from 'react'

const Login = () => (
  <div className="ed-grid">
    <div className="l-block"></div>
    <div className="m-to-center m-60 lg-30">
      <h1 className="center">Iniciar sesion</h1>
      <form>
        <div className="form__item">
          <label htmlFor="email">
            Correo electronico
            <input type="email" id="email" name="email" required autoComplete="off" />
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="password">
            Contraseña
            <input type="password" id="password" name="password" required autoComplete="off" />
          </label>
        </div>
        <div className="form__item">
          <input type="submit" className="button full" value="Iniciar sesion" />
        </div>
      </form>
    </div>
  </div>
)

export default Login;
