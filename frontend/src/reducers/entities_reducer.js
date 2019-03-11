import { combineReducers } from 'redux';
import NotesReducer from './notes_reducer';

const EntititiesReducer = combineReducers({
  notes: NotesReducer,
});

export default EntititiesReducer;