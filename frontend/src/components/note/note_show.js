
import React from 'react';
import { withRouter } from 'react-router-dom';
import NoteIndexItem from './note_index_item';

class NoteShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: ''
    }

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.props.fetchNote(this.props.match.params.noteId);
  }

  componentWillReceiveProps(newState) {
    this.setState({ note: newState.note });
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
        {/* ID: {this.props.note} */}
      </div>
    )
  }
}

export default withRouter(NoteShow);