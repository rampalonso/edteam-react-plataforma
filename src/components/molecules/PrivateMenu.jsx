import React from 'react'
import { NavLink } from "react-router-dom";

const PrivateMenu = () => {
  return (
    <ul>
      <li><NavLink to="/login">Iniciar sesion</NavLink></li>
      <li><NavLink to="/registro">Registrate</NavLink></li>
    </ul>
  )
}

export default PrivateMenu;