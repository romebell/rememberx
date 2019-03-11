import * as NotesAPIUtil from '../util/notes_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";
export const RECEIVE_CURRENT_NOTE = "RECEIVE_CURRENT_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS";

export const receiveCurrentNote = note => ({
  type: RECEIVE_CURRENT_NOTE,
  note
})

export const fetchNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes,
})

export const removeNote = noteId => ({
  type: REMOVE_NOTE,
  noteId
})

export const receiveErrors = errors => ({
  type: RECEIVE_NOTE_ERRORS,
  errors
})

export const allNotes = () => dispatch => (
  NotesAPIUtil.getNotes()
    .then(notes => dispatch(fetchNotes(notes)),
      errors => dispatch(receiveErrors(errors.responseJSON)))
)


// export const signup = user => dispatch => (
//   APIUtil.signup(user).then(() => (
//     dispatch(receiveUserSignIn())
//   ), err => (
//     dispatch(receiveErrors(err.response.data))
//   ))
// );

// export const login = user => dispatch => (
//   APIUtil.login(user).then(res => {
//     const { token } = res.data;
//     localStorage.setItem('jwtToken', token);
//     APIUtil.setAuthToken(token);
//     const decoded = jwt_decode(token);
//     dispatch(receiveCurrentUser(decoded))
//   })
//   .catch(err => {
//     dispatch(receiveErrors(err.response.data));
//   })
// )

// export const logout = () => dispatch => {
//   localStorage.removeItem('jwtToken')
//   APIUtil.setAuthToken(false)
//   dispatch(logoutUser())
// };