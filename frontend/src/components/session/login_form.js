import React from 'react';
import styled from 'styled-components'
import { withRouter } from 'react-router-dom';

const Input = styled.input`
  padding: 1em;
  margin: 1em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;

  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  
  `;
  
  const SubmitButton = styled(Button)`
  color: white;
  background: #FFA725;
  border-color: #FFA725;
`;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/notes');
    }

    this.setState({errors: nextProps.errors})
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.processForm(user)
      .then(this.props.closeModal)
      .then(() => this.props.history.push('/notes'));
  }

  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div><h2>Sign into Remembrrr</h2></div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <Input placeholder="Email" type="text"
              value={this.state.email}
              onChange={this.update('email')}
              />
            <br/>
            <Input placeholder="Password" type="password"
              value={this.state.password}
              onChange={this.update('password')}
            />
            <br/>
            <SubmitButton>Log In</SubmitButton>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);