import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

export const routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign_up" component={SignUp} />
      <Route path="/log_in" component={LogIn} />
    </Switch>
  );
}
