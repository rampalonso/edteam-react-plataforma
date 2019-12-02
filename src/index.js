import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import "./styles/styles.scss"
import store from 'store';
import { Provider } from "react-redux";

import { getAllSpecialities } from 'store/actions/speciality';

store.dispatch(getAllSpecialities())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
