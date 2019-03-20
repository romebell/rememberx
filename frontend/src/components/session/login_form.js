import React from 'react';
import styled from 'styled-components'
import { withRouter } from 'react-router-dom';

const Input = styled.input`
  padding: 1em;
  margin: 1em;
  color: black;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size: 12px;
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

const ModalHeader = styled.header`
  text-align: center;
  padding: 1.5em;
`;

const LogForm = styled.form`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
`;

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.user.email,
      password: this.props.user.password,
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.demoLoginHelper = this.demoLoginHelper.bind(this);
  }
  
  componentDidMount() {
    console.log(this.state.email)
    if (this.state.email === 'demo@email.com') {
      this.demoLogin();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/notes');
    }

    this.setState({errors: nextProps.errors})
  }



  demoLogin() {
    const emailArray = this.state.email.split('');
    const passwordArray = this.state.password.split('');
    this.state.email = '';
    this.state.password = '';
    this.demoLoginHelper(emailArray, passwordArray);
  }

  demoLoginHelper(emailArray, passwordArray) {
    if (emailArray.length > 0) {
      this.setState({
        email: this.state.email + emailArray.shift()
      }, () => {
        window.setTimeout(() =>
          this.demoLoginHelper(emailArray, passwordArray), 100);
        }
      );
    } else if (passwordArray.length > 0) {
      this.setState({
        password: this.state.password + passwordArray.shift()
      }, () => {
        window.setTimeout(() =>
          this.demoLoginHelper(emailArray, passwordArray), 10);
        }
      );
    } else {
      this.props.processForm({username: 'Demo', email: 'demo@email.com', password: 'password'})
        .then(this.props.closeModal)
        .then(() => this.props.history.push('/notes'));
    }
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
        <br />
        <form onSubmit={this.handleSubmit}>
          <LogForm>
          <ModalHeader>Sign into Remembrrr</ModalHeader>
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
          </LogForm>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);