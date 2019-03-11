import React from 'react';
import { withRouter } from 'react-router-dom';
import { networkInterfaces } from 'os';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      answer: '',
      collectionIds: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentWillReceiveProps(newState) {
    this.setState({ note: newState.notes[0] });
    this.setState({errors: newState.errors});
  }

  getData(e) {
    console.log("GETTING DATA")
    console.log(this.props)
    console.log("BREAK")
    console.log(this.props.currentUser)
    console.log("DONE GETTING PROPS")
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { currentUser } = this.props;

    let note = {
      question: this.state.question,
      answer: this.state.answer,
      userId: currentUser.id,
    };

    console.log(note)

    this.props.createNote(note)
      // .then((response) => console.log(response)); 
      .then((response) => this.props.history.push(`/notes/${response.note.data._id}`));
  }

  renderErrors() {
    return(
      <ul>
        {/* {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))} */}
      </ul>
    );
  }

  render() {
    return (
      <div onClick={this.getData}>
        NEW NOTE FORM
        <form onSubmit={this.handleSubmit}>
          <div>
              <input type="text"
                value={this.state.question}
                onChange={this.update('question')}
                placeholder="Question"
              />
            <br/>
              <input type="text"
                value={this.state.answer}
                onChange={this.update('answer')}
                placeholder="answer"
              />
            <br/>
            <input type="submit" value="Submit" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(NoteForm);