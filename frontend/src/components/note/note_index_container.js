import React from 'react';
import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { fetchNotes, createNote } from '../../actions/notes_actions';
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.entities.notes,
    errors: state.errors.session,
    ownPropsNoteId: ownProps.match.params.noteId,
    currentUser: state.session.user
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