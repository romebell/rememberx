import React from 'react';
import { withRouter } from 'react-router-dom';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      answer: '',
      collectionIds: [],
      errors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentWillReceiveProps(newState) {
    // this.setState({ note: newState.notes[0] });
    // this.setState({errors: newState.errors});
  }

  getData(e) {
    // console.log("GETTING DATA")
    // console.log(this.props)
    // console.log("BREAK")
    // console.log(this.props.currentUser)
    // console.log("DONE GETTING PROPS")
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

    if (this.state.question === '' || this.state.answer === '') {
      this.setState({
        errors: ['No field can be left empty'],
      })
    } else {
      this.props.processForm(note)
        // .then((response) => this.props.history.push(`/notes/${response.note.data._id}`))
        .then(() => this.props.history.push(`/notes/`))
        .then(this.props.closeModal);
    }
  }

  renderErrors() {
    return(
      <ul>
        <li>
          {this.state.errors[0]}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div onClick={this.getData}>
        <div onClick={this.props.closeModal} className="close-x">X</div><br></br><br></br>
        {this.props.formType} Note
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