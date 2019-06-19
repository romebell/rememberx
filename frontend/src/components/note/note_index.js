
import React from 'react';
import { withRouter } from 'react-router-dom';
import NoteIndexItem from './note_index_item';
import { Link } from 'react-router-dom';
import NoteShowContainer from './note_show_container';
import Modal from '../modal/note_modal';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: null,
      active: false,
      sortedNotes: null,
    }

    this.getData = this.getData.bind(this);
    this.sortNotes = this.sortNotes.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  getData(e) {
  }

  componentDidUpdate(prevProps) {
    if (Object.values(prevProps.notes).length !== Object.values(this.props.notes).length) {
      this.props.fetchNotes();
    }
  }

  sortNotes(type) {
    const allNotes = Object.values(this.props.notes);
    if (type === "mine") {
      let userNotes = allNotes.filter((note) => note.userId === this.props.currentUser.id);
      let allNotesSorted = userNotes.sort(function(a, b){
        return new Date(b.lastAnswered) - new Date(a.lastAnswered);
      });
      this.setState({sortedNotes: allNotesSorted});
    } else if (type === 'all') {
      let allNotesSorted = allNotes.sort(function(a, b){
        return new Date(b.lastAnswered) - new Date(a.lastAnswered);
      });
      this.setState({sortedNotes: allNotesSorted});
    }
  }

  
  render() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const allNotes = Object.values(this.props.notes);
  let currentNote = allNotes.filter((e) => e._id === this.props.match.params.noteId)
  if (this.state.sortedNotes === null) {
    this.sortNotes('all');
  }

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
          <Modal />

          <section onClick={this.getData} className="note-index">

            <section className="note-index-header">
              <div className="note-index-title" onClick={() => this.sortNotes('all')}>All Notes</div>
              <div className="note-index-mine" onClick={() => this.sortNotes('mine')}>My Notes</div>
              <div className="note-index-new" onClick={() => this.props.openModal('new')}>New Note</div>
            </section>

            <section className="alternating-styling">
              {this.state.sortedNotes ? this.state.sortedNotes.map(note => (
                <Link to={`/notes/${note._id}`}>
                  <NoteIndexItem key={note._id} note={note} monthNames={monthNames} />
                </Link>
              )) : ''}
            </section>

          </section>

          <section className={`${this.props.location.pathname.length < 10 ? 'hide-element' : ''}`}>
            <NoteShowContainer currentNote={currentNote} />
          </section>
        
          <div className="notes-tab">
          
            <section className="note-index-header">
              <div className="note-index-title-2" onClick={() => this.sortNotes('all')}>All Notes</div>
              <div className="note-index-mine-2" onClick={() => this.sortNotes('mine')}>My Notes</div>
              <div className="note-index-new-2" onClick={() => this.props.openModal('new')}>New Note</div>
            </section>

          </div>
        
        </div>

        
      )
    }
  }

}

export default withRouter(NoteIndex);