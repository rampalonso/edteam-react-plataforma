import React from 'react'
import { NavLink } from "react-router-dom";

const removeToken = () => {
  localStorage.removeItem('_token');
  window.location = '/login'
}

const PublicMenu = () => {
  return (
    <ul>
      <li><NavLink exact to="/">Inicio</NavLink></li>
      <li><NavLink to="/especialidades">Especialidades</NavLink></li>
      <li><NavLink to="/cursos">Cursos</NavLink></li>
      <li><NavLink to="/profesores">Profesores</NavLink></li>
      <li><span onClick={removeToken}>Cerrar sesion</span></li>
    </ul>
  )
}

export default PublicMenu;