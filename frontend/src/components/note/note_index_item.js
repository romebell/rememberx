import React from 'react';
import { Link } from 'react-router-dom';

class NoteIndexItem extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/notes/${this.props.note._id}`}>
          <h4>Note data</h4>
          <br></br>
          Question: {this.props.note.question}<br></br>
          ID: {this.props.note._id}<br></br>
          OwnerID: {this.props.note.userId}<br></br>
        </Link>
        <br></br><br></br>
      </div>
    )
  }
}

export default NoteIndexItem;