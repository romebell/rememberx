import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.getData = this.getData.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }
  
  getData(e) {
    console.log("GETTING DATA")
    console.log(this.props)
    console.log("BREAK")
    // console.log(this.getState())
    console.log("DONE GETTING PROPS")
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={'/profile'}>Profile</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1 onClick={this.getData}>Links!</h1>
        { this.getLinks() }
      </div>
    );
  }
}

export default NavBar;