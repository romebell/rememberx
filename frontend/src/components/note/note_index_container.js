import React from 'react';
import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { fetchNotes, createNote } from '../../actions/notes_actions';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    // thisNote: state.entities.notes,
    notes: state.entities.notes,
    errors: state.errors.session,
    // currentNote: state.entities.notes[ownProps.match.params.noteId],
    ownPropsNoteId: ownProps.match.params.noteId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    processForm: (note) => dispatch(createNote(note)),
    otherForm: (
      <button onClick={() => dispatch(openModal('new'))}>
        New
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex));