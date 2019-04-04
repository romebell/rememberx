import * as NotesAPIUtil from '../util/notes_util';

export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";
export const RECEIVE_CURRENT_NOTE = "RECEIVE_CURRENT_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS";

const receiveNote = note => ({
  type: RECEIVE_CURRENT_NOTE,
  note
})

const receiveNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes,
})

const removeNote = noteId => ({
  type: REMOVE_NOTE,
  noteId
})

export const receiveErrors = errors => ({
  type: RECEIVE_NOTE_ERRORS,
  errors
})

export const fetchNotes = () => dispatch => (
  NotesAPIUtil.getNotes()
    .then(notes => dispatch(receiveNotes(notes)),
      errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const fetchNote = id => dispatch => (
  NotesAPIUtil.getNote(id)
    .then(id => dispatch(receiveNote(id)))
      .catch(errors => console.log(errors))
)

export const createNote = note => dispatch => (
  NotesAPIUtil.postNote(note)
    .then(note => dispatch(receiveNote(note)),
      errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const updateNote = note => dispatch => (
  NotesAPIUtil.patchNote(note)
    .then(note => dispatch(receiveNote(note)),
      errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const deleteNote = noteId => dispatch => (
  NotesAPIUtil.deleteNote(noteId)
    .then(note => dispatch(removeNote(noteId)),
      errors => dispatch(receiveErrors(errors.responseJSON)))
)
