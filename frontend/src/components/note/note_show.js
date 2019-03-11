
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import NoteIndexItem from './note_index_item';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: ''
    }

    this.getData = this.getData.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
  }

  componentWillReceiveProps(newState) {
    this.setState({ note: newState.note });
  }

  handleDelete(e) {
    e.preventDefault();
    e.stopPropagation();

    if (this.props.currentUser.id === this.props.note.userId) {
      this.props.deleteNote(this.props.note._id)
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
    console.log("GETTING DATA")
    console.log(this.props)
    console.log("BREAK")
    console.log(this.state)
    console.log("DONE GETTING PROPS")
  }

  render() {

    const { note } = this.props;
    return (
      <div onClick={this.getData}>
        <h2>NOTE SHOW</h2>
        <br></br>
        ID: {note._id}<br></br>
        Q: {note.question}<br></br>
        A: {note.answer}<br></br>
        <br></br>
        Last Answered: {note.lastAnswered}<br></br>
        <br></br>
        <div onClick={this.handleEdit}>
          EDIT NOTE (NOT IMPLIMENTED DUE TO UPCOMING MODAL)
        </div>
        <div onClick={this.handleDelete}>
        {/* <div onClick={() => this.props.deleteNote(this.props.note._id)}> */}
          DELETE NOTE
        </div>
        <div>
          <Link to="/notes">
            NOTE INDEX
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(NoteShow);