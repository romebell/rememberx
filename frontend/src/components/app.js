import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import GreetingContainer from '../greeting/greeting_container';
import NavBarContainer from './nav/navbar_container';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainPage from './main/main_page';

import NoteIndexContainer from './note/note_index_container';
import NoteShowContainer from './note/note_show_container';
import NoteFormContainer from './note/note_form_container';

import './App.scss';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div className="app">
    <Modal />
    {/* <NavBarContainer /> */}
    <GreetingContainer />
    <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/notes/new" component={NoteFormContainer} />
        <ProtectedRoute path="/notes/:noteId" component={NoteIndexContainer} />
        <ProtectedRoute path="/notes" component={NoteIndexContainer} />
        {/* <ProtectedRoute exact path="/notes/:noteId" component={NoteIndexContainer} /> */}
        {/* <ProtectedRoute exact path="/notes/:noteId" component={NoteShowContainer} /> */}
        <Redirect from="*" to="/" />
    </Switch>
  </div>
);

export default App;

