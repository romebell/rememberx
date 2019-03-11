import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NoteIndexContainer from './note/note_index_container';
import NoteShowContainer from './note/note_show_container';
import NoteFormContainer from './note/note_form_container';

import './App.scss';

const App = () => (
  <div className="app">
    <NavBarContainer />
    <Switch>
        <Route exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/notes" component={NoteIndexContainer} />
        <ProtectedRoute exact path="/notes/new" component={NoteFormContainer} />
        <ProtectedRoute exact path="/notes/:noteId" component={NoteShowContainer} />
        <Redirect from="*" to="/" />
    </Switch>
  </div>
);

export default App;