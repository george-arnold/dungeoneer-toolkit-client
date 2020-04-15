import React, { Component } from "react";
import "./Signin.css";

class Signin extends Component {
  render() {
    console.log(this.props);
    return (
      <main>
        <button onClick={() => this.props.handleSignIn()}>Signin</button>
      </main>
    );
  }
}

export default Signin;
