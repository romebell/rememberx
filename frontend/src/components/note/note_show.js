import React from 'react';
import { withRouter } from 'react-router-dom';
import Modal from '../modal/note_modal';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteId: '',
      noteQuestion: '',
      noteAnswer: '',
      noteLastAnswered: '',
      showQuestion: true,
      errors: [],
      active: false,
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
  }

  componentDidUpdate(prevProps) {
    if ( this.props.currentNote[0] !== undefined && this.props.currentNote !== prevProps.currentNote ) {
      this.setState({
        noteId: Object.values(this.props.currentNote[0]._id),
        noteQuestion: Object.values(this.props.currentNote[0].question),
        noteAnswer: Object.values(this.props.currentNote[0].answer),
        noteLastAnswered: Object.values(this.props.currentNote[0].lastAnswered),
        errors: [],
        showQuestion: true,
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
      this.setState({
        errors: ['Invalid permissions: You do not own this note, you cannot delete it.']
      })
    }
  }

  handleEdit(e) {
    e.preventDefault();
    e.stopPropagation();

    if (this.props.currentUser.id === this.props.note.userId) {
    } else {
      this.setState({
        errors: ['Invalid permissions: You do not own this note, you cannot edit it.']
      })
    }
  }

  showAnswer(e) {
    if (this.state.showQuestion) {
      this.setState({
        showQuestion: false,
      })
    } else {
      this.setState({
        showQuestion: true,
      })
    }
  }

  renderErrors() {
    return(
      <ul>
        <li>
          {this.state.errors[0]}
        </li>
      </ul>
    );
  }

  render() {

      return (
        <div onClick={this.getData} className="note-show">
          <Modal />

          <section className="note-show-information">
            {this.state.showQuestion ? (
              <div className={`note-show-question`}>
                 {this.state.noteQuestion}
              </div> ) : (
              <div className={`note-show-answer`}>
                 {this.state.noteAnswer}
            </div>)}<br></br>
          </section>

          <section className="note-show-buttons">
            <div onClick={this.showAnswer} className="note-show-toggle">
              {this.state.showQuestion ? 'Answer' : 'Question'}
            </div>
            {/* <div>
              &nbsp;
            </div> */}
            <div onClick={this.handleDelete} className="note-show-delete">
              Delete
            </div>
          </section>

          <section className="note-show-errors">
            {this.renderErrors()}
          </section>

        </div>
      )
    // }
  }
}

export default withRouter(NoteShow);