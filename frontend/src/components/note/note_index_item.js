import React from 'react';
import { Link } from 'react-router-dom';

class NoteIndexItem extends React.Component {
  render() {
    return (
      // <div onClick={this.getdata}>
      <div>
        <Link to={`/notes/${this.props.note._id}`}>
        <h4>Note data</h4>
        <br></br>
        Question: {this.props.note.question}<br></br>
        ID: {this.props.note._id}<br></br>
        {/* Answer: {this.props.note.answer}<br></br>
        Last Time Answered: {this.props.note.lastAnswered}<br></br>
        Last Time Answered Correctly: {this.props.note.lastAnsweredCorrectly}<br></br> */}
        </Link>
        <br></br><br></br>
      </div>
    )
  }
}

export default NoteIndexItem;