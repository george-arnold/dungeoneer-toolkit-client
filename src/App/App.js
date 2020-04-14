import React, { Component } from "react";
import "./App.css";
import LandingPage from "../LandingPage/LandingPage";

class App extends Component {
  componentDidMount() {
    //look at local storage, see if logged in, set signedIn=true,
    // if idle log out
  }

  render() {
    return (
      <main>
        <LandingPage />
      </main>
    );
  }
}

export default App;
