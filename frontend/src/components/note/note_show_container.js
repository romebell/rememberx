import { connect } from 'react-redux';
import NoteShow from './note_show';
import { fetchNote } from '../../actions/notes_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    // notes: Object.values(state.entities.notes),
    // notes: state.entities.notes,
    // errors: state.errors.session
    // note: Object.values(state.entities.notes)[ownProps.match.params.noteId],
    // note: state.entities.notes[ownProps.match.params.noteId],
    note: state.entities.notes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: id => dispatch(fetchNote(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow);