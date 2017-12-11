import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import BarsIndex from '../../components/bars/BarsIndex';
import BarsNew from '../../components/bars/BarsNew';
import BarsShow from '../../components/bars/BarsShow';
import BarsEdit from '../../components/bars/BarsEdit';
import Login from '../../components/auth/Login';
import Register from '../../components/auth/Register';
import UsersShow from '../../components/users/UsersShow';
import UsersIndex from '../../components/users/UsersIndex';
import Home from '../../components/bars/Home';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>

      <ProtectedRoute exact path="/bars/:id" component={BarsShow} />
      <ProtectedRoute exact path="/bars/:id/edit" component={BarsEdit} />

      <ProtectedRoute exact path="/bars" component={BarsIndex} />
      <Route path="/bars/new" component={BarsNew} />

      <ProtectedRoute path="/users/:id" component={UsersShow}/>
      <ProtectedRoute path="/users" component={UsersIndex}/>

      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </Switch>
  );
};

export default Routes;
