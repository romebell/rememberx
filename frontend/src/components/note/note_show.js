
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // note: {
      //   question: '',
      //   answer: '',
      //   id: '',
      //   lastAnswered: ''
      // },
      noteId: '',
      noteQuestion: '',
      noteAnswer: '',
      noteLastAnswered: '',
    }

    this.getData = this.getData.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    // this.props.fetchNote(this.props.match.params.noteId);
    // this.props.fetchNote(this.props.noteId)
    // .then((response) => console.warn(response))
      // .then((response) => this.setState({
      //   note: response.note,
      //   noteQuestion: response.note.question,
      //   noteAnswer: response.note.answer
      // }))
      
      // console.log('MOUNTED')
    // this.props.fetchPage(this.props.match.params.pageId)
    // .then((response) => this.setState({
    //   page: response.page,
    //   pageTitle: response.page.title,
    //   pageBody: response.page.body,
    // }))
  }

  componentWillReceiveProps(newState) {
    // this.setState({ thisNote: newState.note.first });
    // this.setState({ noteId: newState.currentLocation.pathname.slice(7)});
  }

  componentDidUpdate(prevProps) {
    // if (this.props.match.params.noteId !== prevProps.match.params.noteId ) {
    if (this.props.currentNote !== prevProps.currentNote) {
      this.setState({
        noteId: Object.values(this.props.currentNote[0]._id),
        noteQuestion: Object.values(this.props.currentNote[0].question),
        noteAnswer: Object.values(this.props.currentNote[0].answer),
        noteLastAnswered: Object.values(this.props.currentNote[0].lastAnswered),
      })
      console.log(this.props.currentNote)
      console.log('DETECTED PROP CHANGE')
    }
  }

  handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();

    if (this.props.currentUser.id === this.props.currentNote[0].userId) {
      this.props.deleteNote(this.props.currentNote[0]._id)
        .then((response) => this.props.history.push(`/notes/`));
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
        <div onClick={this.getData}>
          <h2>NOTE SHOW</h2>
          <br></br>
          ID: {this.state.noteId}<br></br>
          Q: {this.state.noteQuestion}<br></br>
          A: {this.state.noteAnswer}<br></br>
          <br></br>
          Last Answered: {this.state.noteLastAnswered}<br></br>
          <br></br>
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