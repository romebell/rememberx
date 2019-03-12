import {
  RECEIVE_CURRENT_NOTE, 
  RECEIVE_ALL_NOTES,
  REMOVE_NOTE,
} from '../actions/notes_actions'
import merge from 'lodash/merge';

const NotesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      // newState = action.notes.data;
      // return newState;
      return merge({}, action.notes.data);
    case RECEIVE_CURRENT_NOTE:
      // newState = action.note.data;
      // return newState;
      return merge({}, state, {[action.note.id]: action.note.data});
    case REMOVE_NOTE:
      newState = merge({}, state);
      delete newState[action.noteId];
      return newState;
    default:
      return state;
  }
}

export default NotesReducer;