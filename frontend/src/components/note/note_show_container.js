import { connect } from 'react-redux';
import NoteShow from './note_show';
import { fetchNote, deleteNote, fetchNotes } from '../../actions/notes_actions';
import { selectAllNotes } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    note: state.entities.notes,
    // currentNote: state.entities.notes[ownProps.match.params.noteId],
    // ownProps: ownProps,
    // allNotes: selectAllNotes(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: id => dispatch(deleteNote(id)),
    fetchNote: id => dispatch(fetchNote(id)),
    fetchNotes: () => dispatch(fetchNotes()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow);