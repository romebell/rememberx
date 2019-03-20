import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import NoteForm from './note_form';
import { updateNote } from '../../actions/notes_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    formType: 'Edit'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (note) => dispatch(updateNote(note)),
    otherForm: (
      <button onClick={() => dispatch(openModal('new'))}>
        New
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);