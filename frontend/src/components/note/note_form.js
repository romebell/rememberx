import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Input = styled.input`
  padding: 1em;
  margin: 0em;
  color: black;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size: 12px;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 0;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  `;
  
  const SubmitButton = styled(Button)`
  color: white;
  background: #FFA725;
  border-color: #FFA725;
`;

const ModalHeader = styled.header`
  text-align: center;
  padding: 0;
  margin-bottom: 10px;
`;

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
      <div onClick={this.getData} className="note-form">
        <div onClick={this.props.closeModal} className="close-x">X</div><br></br><br></br>
        {/* <div className="note-modal-title">{this.props.formType} Note</div> */}
        <ModalHeader>{this.props.formType} Note</ModalHeader><br></br>
        <form onSubmit={this.handleSubmit}>
          <div className="note-modal">
              <Input type="text"
                value={this.state.question}
                onChange={this.update('question')}
                placeholder="Question"
              />
            <br/>
              <Input type="text"
                value={this.state.answer}
                onChange={this.update('answer')}
                placeholder="Answer"
              />
            <br/>
            <br></br>
            {/* <input type="submit" value="Submit" /> */}
            <SubmitButton>Submit</SubmitButton>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(NoteForm);