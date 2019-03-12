import { combineReducers } from 'redux';
import NotesReducer from './notes_reducer';
import UsersReducer from './users_reducer';

const EntititiesReducer = combineReducers({
  notes: NotesReducer,
  users: UsersReducer
});

export default EntititiesReducer;