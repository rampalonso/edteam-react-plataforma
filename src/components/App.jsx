import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Protected from 'routes/Protected';
import Public from 'routes/Public';

import { Home, Specialities, Speciality, Courses, Course, Teachers, Lesson, Login, Register, NotFound } from './pages';
import { Header } from './Organisms';



const App = () => (
  <Router>
    <Header />
    <Switch>
      <Protected path="/" exact component={Home} />
      <Protected path="/especialidades" exact component={Specialities} />
      <Protected path="/especialidaddes/:id" component={Speciality} />
      <Protected path="/cursos" exact component={Courses} />
      <Protected path="/cursos/:id" component={Course} />
      <Protected path="/profesores" exact component={Teachers} />
      <Protected path="/clase/:id" component={Lesson} />

      <Public path="/login" exact component={Login} />
      <Public path="/register" exact component={Register} />

      <Route component={NotFound} />
    </Switch>
  </Router>
)
export default App;
