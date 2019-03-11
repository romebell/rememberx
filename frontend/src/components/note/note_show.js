
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

  componentDidMoubt() {
    this.props.fetchNote(this.props.match.params.pageId);
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
    return (
      <div onClick={this.getData}>
        NOTE SHOW
      </div>
    )
  }
}

export default withRouter(NoteShow);