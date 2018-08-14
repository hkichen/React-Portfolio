import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Cover from './components/Cover';
import Nav from './components/Nav';

export const AppRouter = () => {
  return (
    <Router component={Landing}>
      <div>
        <Route path="/" component={Nav} />
        <Route path="/home" component={Cover} />
      </div>
    </Router>
  );
};
