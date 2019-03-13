import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <div className="navbar">
      <div className="logo">
        <div className="logo-image"></div>
        <div className="logo-text">REMEMBRRR</div>
      </div>
      <nav className="navbar-links">
        <button className="signup-link" onClick={() => openModal('signup')}>Signup</button>
        {/* &nbsp;or&nbsp; */}
        <button className="login-link" onClick={() => openModal('login')}>Login</button>
      </nav>
    </div>
  );
  const personalGreeting = () => {
    return (
        <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.name}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    )
  };

  return (
    currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
  )

};

export default Greeting;
