import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import DungeoneerContext from "../DungeoneerContext";
import LandingPage from "../LandingPage/LandingPage";
import Signin from "../Signin/Signin";
import Navigation from "../Navigation/Navigation";
import CharacterLibrary from "../CharacterLibrary/CharacterLibrary";
import Sheet from "../Sheet/Sheet";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      //an array of character objects
      characters: [
        {
          id: 0,
          name: "Aragorn",
          level: 10,
          class: "Warrior",
          hp: 100,
          strength: 18,
          dexterity: 16,
          constitution: 14,
          intelligence: 14,
          wisdom: 16,
          charisma: 20,
          imageURL:
            "https://vignette.wikia.nocookie.net/lotr/images/b/b6/Aragorn_profile.jpg/revision/latest/top-crop/width/360/height/450?cb=20170121121423",
        },
        {
          id: 1,
          name: "Gandalf",
          level: 20,
          class: "Mage",
          hp: 80,
          strength: 10,
          dexterity: 18,
          constitution: 12,
          intelligence: 20,
          wisdom: 20,
          charisma: 18,
          imageURL:
            "https://vignette.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg/revision/latest?cb=20121110131754",
        },
        {
          id: 2,
          name: "Gimli",
          level: 10,
          class: "Brute",
          hp: 150,
          strength: 18,
          dexterity: 10,
          constitution: 20,
          intelligence: 12,
          wisdom: 12,
          charisma: 8,
          imageURL:
            "https://vignette.wikia.nocookie.net/lotr/images/e/ec/Gimli_-_FOTR.png/revision/latest/top-crop/width/360/height/450?cb=20121008105956",
        },
        {
          id: 3,
          name: "Legolas",
          level: 10,
          class: "Hunter",
          hp: 90,
          strength: 12,
          dexterity: 18,
          constitution: 14,
          intelligence: 16,
          wisdom: 20,
          charisma: 18,
          imageURL:
            "https://vignette.wikia.nocookie.net/pjhobbitfilms/images/2/26/LegolasGreenleaf.jpg/revision/latest/top-crop/width/360/height/450?cb=20171003185019",
        },
        {
          id: 4,
          name: "Boromir",
          level: 10,
          class: "Warrior",
          hp: 0,
          strength: 18,
          dexterity: 12,
          constitution: 14,
          intelligence: 8,
          wisdom: 4,
          charisma: 16,
          imageURL:
            "https://i2.wp.com/fellowshipandfairydust.com/wp-content/uploads/2016/11/BoromirBean.jpg?resize=500%2C500&ssl=1",
        },
        {
          id: 5,
          name: "Frodo",
          level: 4,
          class: "Thief",
          hp: 20,
          strength: 10,
          dexterity: 20,
          constitution: 10,
          intelligence: 18,
          wisdom: 14,
          charisma: 12,
          imageURL:
            "https://vignette.wikia.nocookie.net/lotr/images/8/8e/Frodo_ring.jpeg/revision/latest/scale-to-width-down/340?cb=20181026105306",
        },
      ],
    };
  }

  componentDidMount() {
    //look at local storage, see if logged in, set signedIn=true,
    // if idle log out
  }
  handleSignIn = () => {
    const { signedIn } = this.state;
    this.setState({
      signedIn: !signedIn,
    });
  };
  render() {
    const value = {
      characters: this.state.characters,
    };
    const { signedIn } = this.state;
    // NEXT STEP if signed in, load character library
    return (
      <DungeoneerContext.Provider value={value}>
        <main>
          <Navigation handleSignIn={this.handleSignIn} signedIn={signedIn} />

          <Route exact path="/start" component={LandingPage} />
          <Route exact path="/signin">
            <Signin handleSignIn={this.handleSignIn} />
          </Route>
          <Route exact path="/library" component={CharacterLibrary} />

          {/* <Route exact path="/register" component={Signin} /> */}
          <Route path={`/library/character/:id`} component={Sheet}></Route>
        </main>
      </DungeoneerContext.Provider>
    );
  }
}

export default App;
