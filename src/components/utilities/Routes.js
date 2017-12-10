import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BarsIndex from '../../components/bars/BarsIndex';
import BarsNew from '../../components/bars/BarsNew';
import BarsShow from '../../components/bars/BarsShow';
import BarsEdit from '../../components/bars/BarsEdit';
import Login from '../../components/auth/Login';
import Register from '../../components/auth/Register';
import UsersShow from '../../components/users/UsersShow';
import Home from '../../components/bars/Home';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/bars" component={BarsIndex} />
      <Route path="/bars/new" component={BarsNew} />
      <Route exact path="/bars/:id" component={BarsShow} />
      <Route exact path="/bars/:id/edit" component={BarsEdit} />
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/users/:id" component={UsersShow}/>
    </Switch>
  );
};

export default Routes;
