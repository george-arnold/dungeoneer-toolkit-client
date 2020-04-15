import React, { Component } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    const { signedIn } = this.props;

    if (signedIn) {
      return (
        <nav className="Navigation">
          <Link onClick={() => this.props.handleSignIn()} to="/start">
            Logout
          </Link>
        </nav>
      );
    } else {
      return (
        <nav className="Navigation">
          <Link to="/signin">Signin</Link>
        </nav>
      );
    }
  }
}

export default Navigation;
