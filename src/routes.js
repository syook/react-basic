import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import TenantHome from './components/TenantHome';
import LogIn from './components/LogIn';
import Users from './components/Users';
import UserNew from './components/UserNew';
import UserEdit from './components/UserEdit';
import Dashboard from './components/Dashboard';

export const tenantRoutes = () => {
  return (
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/users" exact component={Users} />
      <Route path="/users/new" component={UserNew} />
      <Route path="/users/edit" component={UserEdit} />
      <Redirect to="/dashboard" />
    </Switch>
  );
}

export const tenantUnauthorizedRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={TenantHome} />
      <Route path="/log_in" component={LogIn} />
      <Redirect to="/log_in" />
    </Switch>
  );
}

export const adminRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/sign_up" component={SignUp} />
      <Redirect to="/" />
    </Switch>
  );
}
