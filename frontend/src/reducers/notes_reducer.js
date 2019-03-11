import {
  RECEIVE_CURRENT_NOTE, 
  RECEIVE_ALL_NOTES,
} from '../actions/notes_actions';

const NotesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      newState = action.notes.data;
      return newState;
    case RECEIVE_CURRENT_NOTE:
      return {
        ...state,
        note: action.currentNote
      };
    default:
      return state;
  }
}

export default NotesReducer;