import { connect } from 'react-redux';
import NoteShow from './note_show';
import { fetchNote, deleteNote } from '../../actions/notes_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    note: state.entities.notes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteNote: id => dispatch(deleteNote(id)),
    fetchNote: id => dispatch(fetchNote(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow);