import React, { Component } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import CharacterLibPic from "../assets/CharacterLibPic.png";
import CharacterSheetPic from "../assets/CharacterSheetPic.png";
import CharacterFormPic from "../assets/CharacterFormPic.png";

class LandingPage extends Component {
  render() {
    return (
      <main className="LandingPage">
        <section>
          <h1>The Dungeoneer's Toolkit</h1>
          <Link to="/library">SIGN IN </Link>
          <p>
            Catalog your role playing characters, and manage your dice rolls
          </p>
          <p>Sign to get started</p>
          <h2>What the app will do</h2>
        </section>
        <section>
          <h3>Save all your characters in the Character Library</h3>
          <img
            className="LibraryPic"
            src={CharacterLibPic}
            alt="library of playable characters"
          />
        </section>
        <section>
          <h3>Update your stats, to keep track of your character.</h3>
          <img
            className="FormPic"
            src={CharacterFormPic}
            alt="form to input character info"
          />
        </section>
        <section>
          <h3>Click on dice to roll automatically!</h3>
          <img
            className="PlaySheetPic"
            src={CharacterSheetPic}
            alt="playsheet for playability"
          />
        </section>
      </main>
    );
  }
}

export default LandingPage;
