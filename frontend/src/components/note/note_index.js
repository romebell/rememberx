
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
    }

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  getData(e) {
    console.log("GETTING DATA")
    console.log(this.props)
    console.log("BREAK")
    // console.log(Object.values(this.props.notes).length)
    const allNotes = Object.values(this.props.notes);
    let allNotesSorted = allNotes.sort(function(a, b){
      return new Date(b.lastAnswered) - new Date(a.lastAnswered);
    });
    console.log(allNotesSorted)
    console.log("DONE GETTING PROPS")
  }

  componentDidUpdate(prevProps) {
    if (Object.values(prevProps.notes).length !== Object.values(this.props.notes).length) {
      console.log('Page count changed')
      this.props.fetchNotes();
    }
  }


  
  render() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const allNotes = Object.values(this.props.notes);
  let currentNote = allNotes.filter((e) => e._id === this.props.match.params.noteId)
  let allNotesSorted = allNotes.sort(function(a, b){
    return new Date(b.lastAnswered) - new Date(a.lastAnswered);
  });

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
              <Link to="/notes/">
                <div className="note-index-title">All</div>
              </Link>
              {/* <Link to="/notes/new"> */}
                <div className="note-index-new" onClick={() => this.props.openModal('new')}>New</div>
              {/* </Link> */}
            </section>
            <section>
              {allNotesSorted ? allNotesSorted.map(note => (
                <Link to={`/notes/${note._id}`}>
                  <NoteIndexItem key={note._id} note={note} monthNames={monthNames} />
                </Link>
              )) : ''}
            </section>
          </section>
          <section className={`${this.props.location.pathname.length < 10 ? 'hide-element' : ''}`}>
            <NoteShowContainer currentNote={currentNote} />
          </section>
        </div>
      )
    }
  }

}

export default withRouter(NoteIndex);