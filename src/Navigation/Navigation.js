import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = props => {
  const { signedIn } = props;

  if (signedIn) {
    return (
      <nav className="Navigation">
        <Link onClick={() => props.handleSignIn(false)} to="/">
          Logout
        </Link>
      </nav>
    );
  } else {
    return (
      <nav className="Navigation">
        <Link to="/signin">Signin</Link>
        <Link to="/register">Register</Link>
      </nav>
    );
  }
};

export default Navigation;
