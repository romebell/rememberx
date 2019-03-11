import {
  RECEIVE_CURRENT_NOTE, 
  RECEIVE_ALL_NOTES,
} from '../actions/notes_actions';

const NotesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_NOTE:
      return {
        ...state,
        note: action.currentNote
      };
    case RECEIVE_ALL_NOTES:
      return {
        notes: action.notes
      };
    default:
      return state;
  }
}

export default NotesReducer;