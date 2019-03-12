
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteId: '',
      noteQuestion: '',
      noteAnswer: '',
      noteLastAnswered: '',
    }

    this.getData = this.getData.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if ( this.props.currentNote[0] != undefined && this.props.currentNote !== prevProps.currentNote ) {
      this.setState({
        noteId: Object.values(this.props.currentNote[0]._id),
        noteQuestion: Object.values(this.props.currentNote[0].question),
        noteAnswer: Object.values(this.props.currentNote[0].answer),
        noteLastAnswered: Object.values(this.props.currentNote[0].lastAnswered),
      })
    }
  }

  handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();

    if (this.props.currentUser.id === this.props.currentNote[0].userId) {
      this.props.deleteNote(this.props.currentNote[0]._id)
        .then((response) => this.props.history.push(`/notes/`))
        .then(() => this.props.fetchNotes());
    } else {
      console.log("You do not own this, you cannot delete it")
    }
  }

  handleEdit(e) {
    e.preventDefault();
    e.stopPropagation();

    if (this.props.currentUser.id === this.props.note.userId) {
    } else {
      console.log("You do not own this, you cannot edit it")
    }
  }


  getData(e) {
    // console.log("GETTING DATA")
    // console.log(this.props)
    // console.log("BREAK")
    // console.log(this.state)
    // console.log("DONE GETTING PROPS")
  }

  render() {

      return (
        <div onClick={this.getData} className="note-show">
        <div className="note-show-question">
          Q: {this.state.noteQuestion}<br></br>
        </div><br></br>
        <div className="note-show-answer">
          A: {this.state.noteAnswer}<br></br>
        </div><br></br>
        <div className="note-show-last-answered">
          Last Answered: {this.state.noteLastAnswered}<br></br>
        </div><br></br>
          <div onClick={this.handleEdit}>
            EDIT NOTE (NOT IMPLIMENTED DUE TO UPCOMING MODAL)
          </div>
          <div onClick={this.handleDelete}>
            DELETE NOTE
          </div>
          <div>
            <Link to="/notes">
              NOTE INDEX
            </Link>
          </div>
        </div>
      )
    // }
  }
}

export default withRouter(NoteShow);