import React from 'react'
import { Route, Redirect } from "react-router-dom";

const Public = ({ component, ...args }) => {
  const loggedIn = true;

  if (loggedIn) {
    return <Redirect to="/" />;
  }
  return <Route {...args} render={component} />
}

export default Public
