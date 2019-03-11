import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from '../greeting/greeting_container';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';

import './App.scss'

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <GreetingContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;

