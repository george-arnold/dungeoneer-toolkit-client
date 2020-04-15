import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Signin from "../Signin/Signin";
import Navigation from "../Navigation/Navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
    };
  }
  componentDidMount() {
    //look at local storage, see if logged in, set signedIn=true,
    // if idle log out
  }
  handleSignIn = () => {
    this.setState({
      signedIn: !this.state.signedIn,
    });
  };
  render() {
    const { signedIn } = this.state;
    return (
      <main>
        <Navigation handleSignIn={this.handleSignIn} signedIn={signedIn} />
        <Switch>
          <Route exact path="/start" component={LandingPage} />
          <Route exact path="/signin">
            <Signin handleSignIn={this.handleSignIn} />
          </Route>
        </Switch>
        {/* <Route exact path="/register" component={Signin} /> */}
      </main>
    );
  }
}

export default App;
