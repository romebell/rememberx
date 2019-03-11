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

const App = () => (
  <div className="app">
    <Modal />
    <NavBarContainer />
    <GreetingContainer />
    <Switch>
        <Route exact path="/" component={MainPage} />
        <ProtectedRoute exact path="/notes" component={NoteIndexContainer} />
        <ProtectedRoute exact path="/notes/new" component={NoteFormContainer} />
        <ProtectedRoute exact path="/notes/:noteId" component={NoteShowContainer} />
        <Redirect from="*" to="/" />
    </Switch>
  </div>
);

export default App;

