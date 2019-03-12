
import React from 'react';
import { withRouter } from 'react-router-dom';
import NoteIndexItem from './note_index_item';
import { Link } from 'react-router-dom';
import NoteShowContainer from './note_show_container';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: null,
    }

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  getData(e) {
    // console.log("GETTING DATA")
    // console.log(this.props)
    // console.log("BREAK")
    // console.log(currentNote)
    // console.log("DONE GETTING PROPS")
  }

  
  render() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const allNotes = Object.values(this.props.notes);
  let currentNote = allNotes.filter((e) => e._id === this.props.match.params.noteId)

    if (this.state.notes === []) {
      return (
        <div onClick={this.getData} className="note-index">
          There are no notes!
          <Link to="/notes/new">
            <div>
              LINK TO NEW NOTES
            </div>
          </Link>
        </div>
      )
    } else {
      return (
        <div className="notes">
          <section onClick={this.getData} className="note-index">
            <section className="note-index-header">
              <div className="note-index-title">All</div>
              <div className="note-index-new">
                <Link to="/notes/new">New</Link>
              </div>
            </section>
            <section>
              {allNotes ? allNotes.map(note => (
                <Link to={`/notes/${note._id}`}>
                  <NoteIndexItem key={note._id} note={note} monthNames={monthNames} />
                </Link>
              )) : ''}
            </section>
          </section>
          <section className="note-show">
            <NoteShowContainer currentNote={currentNote} />
          </section>
        </div>
      )
    }
  }

}

export default withRouter(NoteIndex);