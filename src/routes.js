import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Users from './components/Users';
import UserNew from './components/UserNew';
import UserEdit from './components/UserEdit';
import Dashboard from './components/Dashboard';

export const routes = () => {
  return (
    <Switch>
      {/* <Route path="/" exact component={Home} /> */}
      {/* <Route path="/sign_up" component={SignUp} /> */}
      {/* <Route path="/log_in" component={LogIn} /> */}
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/users" exact component={Users} />
      <Route path="/users/new" component={UserNew} />
      <Route path="/users/edit" component={UserEdit} />
      {/* <Route component={Dashboard} /> */}
      <Redirect to="/dashboard" />
    </Switch>
  );
}

export const restrictedRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign_up" component={SignUp} />
      <Route path="/log_in" component={LogIn} />
      {/* <Route component={LogIn} /> */}
      <Redirect to="/log_in" />
    </Switch>
  );
}
