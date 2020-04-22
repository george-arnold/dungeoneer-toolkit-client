import React, { Component } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <main>
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
          <img src="https://via.placeholder.com/150/" alt="placeholder1" />
        </section>
        <section>
          <h3>Update your stats, to keep track of your character.</h3>
          <img src="https://via.placeholder.com/150/" alt="placeholder2" />
        </section>
        <section>
          <h3>Click on skills and attacks to roll automatically!</h3>
          <img src="https://via.placeholder.com/150/" alt="placeholder3" />
        </section>
      </main>
    );
  }
}

export default LandingPage;
