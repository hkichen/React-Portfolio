import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cover from './components/Cover';
import Nav from './components/Nav';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Cover} />
      </Switch>
    </div>
  </Router>
);

export default App;
