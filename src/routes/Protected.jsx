import React from 'react'
import { Route, Redirect } from "react-router-dom";

const Protected = ({ component, ...args }) => {

  const loggedIn = localStorage.getItem('_token');

  if (!loggedIn) {
    return <Redirect to="/login" />;
  }
  return <Route {...args} render={component} />
}

export default Protected
