import React from 'react';

class NoteIndexItem extends React.Component {
  // constructor(props) {
  //   super(props)


  //   this.getData = this.getData.bind(this);
  // }


  // getData(e) {
  //   console.log("GETTING DATA")
  //   console.log(this.props)
  //   console.log("BREAK")
  //   console.log(this.state)
  //   console.log("DONE GETTING PROPS")
  // }

  render() {
    return (
      // <div onClick={this.getdata}>
      <div>
        Note Index Item TEST
        <h4>Note data</h4>
        <br></br>
        {this.props.note.question}
        {/* {this.props.note.question} */}
      </div>
    )
  }
}

export default NoteIndexItem;