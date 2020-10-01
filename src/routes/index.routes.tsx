import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SingIn from '../pages/SingIn';
// import { Container } from './styles';

const Routes: React.FC = () => {
  return <Switch>
    <Route exact path="/">
      <SingIn/>
      </Route>
    <Route path="/dashboard">
      <Dashboard/>
    </Route>
  </Switch>;
}

export default Routes;
