
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
      showQuestion: true,
    }

    this.getData = this.getData.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
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
          <section className="note-show-information">
            {/* <div className={`note-show-question ${this.state.showQuestion ? '' : 'remove-element'}`}> */}
            {this.state.showQuestion ? (
              <div className={`note-show-question`}>
                Q: {this.state.noteQuestion}
              </div> ) : (
              <div className={`note-show-answer`}>
                A: {this.state.noteAnswer}
            </div>)}<br></br>
            {/* <div className={`note-show-answer ${this.state.showQuestion ? 'remove-element' : ''}`}>
              A: {this.state.noteAnswer}<br></br>
            </div><br></br> */}
            {/* <div className="note-show-last-answered">
              Last Answered: {this.state.noteLastAnswered}<br></br>
            </div><br></br> */}
          </section>
          <section className="note-show-buttons">
            <div onClick={this.handleEdit} className="note-show-edit">
              Edit
            </div>
            <div onClick={this.showAnswer} className="note-show-toggle">
              {this.state.showQuestion ? 'Answer' : 'Question'}
            </div>
            <div onClick={this.handleDelete} className="note-show-delete">
              Delete
            </div>
            {/* <div>
              <Link to="/notes">
                NOTE INDEX
              </Link>
            </div> */}
          </section>
        </div>
      )
    // }
  }
}

export default withRouter(NoteShow);