import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { fetchNotes } from '../../actions/notes_actions';

const mapStateToProps = (state) => {
  return {
    notes: state.entities.notes,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),

    // login: user => dispatch(login(user))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex);