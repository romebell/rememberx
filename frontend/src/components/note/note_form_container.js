import { connect } from 'react-redux';
import NoteForm from './note_form';
import { createNote } from '../../actions/notes_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNote: note => dispatch(createNote(note)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);