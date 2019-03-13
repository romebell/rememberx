import React from 'react';
import { isEmpty } from 'lodash';

const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <div className="navbar" onClick={() => console.log(currentUser)}>
      <div className="logo">
        <div className="logo-image"></div>
        <div className="logo-text" onClick={() => console.log(currentUser)}>REMEMBRRR</div>
      </div>
      <nav className="navbar-links">
        <button className="signup-link link-hover" onClick={() => openModal('signup')}>SIGNUP</button>
        {/* &nbsp;or&nbsp; */}
        <button className="login-link link-hover" onClick={() => openModal('login')}>LOGIN</button>
      </nav>
    </div>
  );
  const personalGreeting = () => {
    return (
        <hgroup className="header-group" >
        <h2 className="header-name">Hi, {currentUser.name}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    )
  };

  return (
    !isEmpty(currentUser) ? personalGreeting(currentUser, logout) : sessionLinks()
  )

};

export default Greeting;
