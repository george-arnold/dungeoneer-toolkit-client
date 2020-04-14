import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Signin from "../Signin/Signin";

class App extends Component {
  componentDidMount() {
    //look at local storage, see if logged in, set signedIn=true,
    // if idle log out
  }

  render() {
    return (
      <main>
        <Route exact path="/start" component={LandingPage} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/register" component={Signin} />
      </main>
    );
  }
}

export default App;
