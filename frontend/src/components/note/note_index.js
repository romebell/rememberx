
import React from 'react';
import { withRouter } from 'react-router-dom';
import NoteIndexItem from './note_index_item';
import { Link } from 'react-router-dom';

class NoteIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: []
    }

    this.getData = this.getData.bind(this);

  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  componentWillReceiveProps(newState) {
    this.setState({ notes: newState.notes });
  }

  getData(e) {
    console.log("GETTING DATA")
    console.log(this.props)
    console.log("BREAK")
    console.log(this.state)
    console.log("DONE GETTING PROPS")
  }


  render() {
    if (this.state.notes.length === 0) {
      return (
        <div onClick={this.getData}>
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
        <div onClick={this.getData}>
          <h2> All Notes!</h2>
          {this.state.notes.map(note => (
            <NoteIndexItem key={note._id} note={note} />
          ))}
          <Link to="/notes/new">
            <div>
              LINK TO NEW NOTES
            </div>
          </Link>
        </div>
      )
    }
  }

}

export default withRouter(NoteIndex);