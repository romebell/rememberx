
import React from 'react';
import { withRouter } from 'react-router-dom';
import NoteIndexItem from './note_index_item';

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
    // console.log(this.props)
    // const { notes } = this.props;
    if (this.state.notes.length === 0) {
      return (
        <div onClick={this.getData}>
          There are no notes!
        </div>
      )
    } else {
      return (
        <div onClick={this.getData}>
        {/* <div> */}
          <h2> All Notes!</h2>
          {this.state.notes.map(note => (
            <NoteIndexItem key={note._id} note={note} />
          ))}
        </div>
      )
    }
    // return (
    //   <div>
    //     {/* <span onClick={this.getData}>NOTES TEST</span> */}
    //     {/* {notes} */}
    //     {/* {notes.map(note => <NoteIndexItem key={note.id} note={note} />)} */}
    //   </div>
    // )
  }

}

export default withRouter(NoteIndex);