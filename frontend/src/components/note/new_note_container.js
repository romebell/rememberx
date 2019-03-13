import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import NoteForm from './note_form';
import { createNote } from '../../actions/notes_actions';

const mapStateToProps = (state) => {
  return {
    formType: 'new',
    currentUser: state.session.user,
  };

};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (note) => dispatch(createNote(note)),
    otherForm: (
      <button onClick={() => dispatch(openModal('edit'))}>
        Edit
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);