import React from 'react';
import { isEmpty } from 'lodash';

const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <div className="header">
      <div className="logo">
        <div className="logo-image"></div>
        <div className="logo-text">RememberX</div>
      </div>
      <nav className="navbar-links">
        <button className="signup-link" onClick={() => openModal('signup')}>Signup</button>
        <button className="login-link" onClick={() => openModal('login')}>Login</button>
        <button className="demo-link" onClick={() => openModal('demo')}>Demo Login</button>
      </nav>
    </div>
  );
  const personalGreeting = () => {
    return (
      <div className="notes-navbar">
        <div className="notes-logo">
          <div className="notes-logo-image"></div>
          <div className="notes-logo-text">RememberX</div>
        </div>
        <nav className="notes-navbar-links">
          <h2 className="header-name">Hi, {currentUser.name}!</h2>
          <button className="header-button" onClick={logout}>Log Out</button>
        </nav>
      </div>
    )
  };

  return (
    !isEmpty(currentUser) ? personalGreeting(currentUser, logout) : sessionLinks()
  )

};

export default Greeting;

// decide if you want the header to be the class or the navbar