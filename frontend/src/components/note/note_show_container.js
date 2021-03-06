import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchNote, deleteNote, fetchNotes } from '../../actions/notes_actions';
import { patchNote } from '../../util/notes_util';
import NoteShow from './note_show';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    note: state.entities.notes,
    formType: 'edit',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: id => dispatch(deleteNote(id)),
    fetchNote: id => dispatch(fetchNote(id)),
    fetchNotes: () => dispatch(fetchNotes()),
    processForm: (note) => dispatch(patchNote(note)),
    otherForm: (
      <button onClick={() => dispatch(openModal('new'))}>
        New
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow);