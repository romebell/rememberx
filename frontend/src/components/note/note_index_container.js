import { connect } from 'react-redux';
import NoteIndex from './note_index';
import { fetchNotes } from '../../actions/notes_actions';
import { withRouter } from 'react-router-dom';

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
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteIndex));