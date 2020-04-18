import React, { useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Signin from "../Signin/Signin";
import Navigation from "../Navigation/Navigation";
import CharacterLibrary from "../CharacterLibrary/CharacterLibrary";
import Sheet from "../Sheet/Sheet";
import CharacterDataSTORE from "../CharacterDataSTORE";
const App = () => {
  const [signedIn, setSignedIn] = useState(false);

  // const [characterIndex, setCharacterIndex] = useState(0);
  // const [name, setName] = useState(characters[characterIndex].name);

  // const onUpdateCharacter = (i, character) => {
  //   this.setState((state) => {
  //     const characters = state.characters.map((item, j) => {
  //       if (j === i) {
  //         return character;
  //       } else {
  //         return item;
  //       }
  //     });
  //     return {
  //       characters,
  //     };
  //   });
  // };

  return (
    <main>
      <Navigation handleSignIn={setSignedIn} signedIn={signedIn} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signin">
          <Signin setSignedIn={setSignedIn} />
        </Route>
        <Route
          exact
          path="/library"
          render={(props) => <CharacterLibrary {...props} />}
        />
        <Route
          path={`/character/:id`}
          render={(props) => <Sheet {...props} />}
        />
      </Switch>
    </main>
  );
};

export default App;
