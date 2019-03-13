import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import NoteForm from './note_form';
import { patchNote } from '../../util/notes_util';

const mapStateToProps = (state) => {
  return {
    // signedIn: state.session.isSignedIn,
    // errors: state.errors.session,
    formType: 'edit'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (note) => dispatch(patchNote(note)),
    otherForm: (
      <button onClick={() => dispatch(openModal('new'))}>
        New
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);