import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

class Signin extends Component {
  render() {
    console.log(this.props);
    return (
      <main>
        <button onClick={() => this.props.handleSignIn()}>
          <Link to="/library">Signin</Link>
        </button>
      </main>
    );
  }
}

export default Signin;
