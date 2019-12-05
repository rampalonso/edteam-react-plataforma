import React from 'react'
import { Route, Redirect } from "react-router-dom";

const Public = ({ component, ...args }) => {

  const loggedIn = localStorage.getItem('_token');

  if (loggedIn) {
    return <Redirect to="/" />;
  }
  return <Route {...args} component={component} />
}

export default Public
