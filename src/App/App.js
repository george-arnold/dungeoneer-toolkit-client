import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Signin from "../Signin/Signin";
import Navigation from "../Navigation/Navigation";
import CharacterLibrary from "../CharacterLibrary/CharacterLibrary";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      //an array of character objects
    };
  }
  handleSignIn = () => {
    const { signedIn } = this.state;
    this.setState({
      signedIn: !signedIn,
    });
  };

  onUpdateCharacter = (i, character) => {
    this.setState((state) => {
      const characters = state.characters.map((item, j) => {
        if (j === i) {
          return character;
        } else {
          return item;
        }
      });
      return {
        characters,
      };
    });
  };
  render() {
    const { signedIn } = this.state;
    // NEXT STEP if signed in, load character library
    return (
      <main>
        <Navigation handleSignIn={this.handleSignIn} signedIn={signedIn} />

        <Route exact path="/start" component={LandingPage} />
        <Route exact path="/signin">
          <Signin handleSignIn={this.handleSignIn} />
        </Route>
        <Route exact path="/library" component={CharacterLibrary} />

        {/* <Route exact path="/register" component={Signin} /> */}
      </main>
    );
  }
}

export default App;
