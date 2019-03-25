import React from 'react';
import { withRouter } from 'react-router-dom';

class NoteIndexItem extends React.Component {
  render() {
    const { note, monthNames } = this.props;
    return (
      // <div className="alternating-styling">
      <button className="note-index-item">
        <div className="note-item-question">
          {this.props.note.question}
        </div><br></br>
        <div className="note-item-last-answered">
          Last Answered:&nbsp;
            { monthNames[(note.lastAnsweredCorrectly.slice(5, 7) % 12)].slice(0, 3)}&nbsp;
            {note.lastAnsweredCorrectly.slice(8, 10)},&nbsp;
            {note.lastAnsweredCorrectly.slice(0, 4)}
        </div>
        <div className="note-item-next-review">
          Next Review: 
        </div>
      </button>
      // </div>
    )
  }
}

export default withRouter(NoteIndexItem);