import React from 'react';
import styled from 'styled-components'
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

const LogForm = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
`;

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
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
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}>
          <LogForm>
            <br/>
            <ModalHeader>Sign up to Remembrrr</ModalHeader>
              
              <Input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                placeholder="Username"
              />
            <br/>

              <Input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                placeholder="Email"
              />
            <br/>

              <Input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
              />
            <br/>

              <Input type="password"
                value={this.state.password2}
                onChange={this.update('password2')}
                placeholder="Confirm Password"
              />
            <br/>

            <SubmitButton>Submit</SubmitButton>
            {this.renderErrors()}
          </LogForm>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);