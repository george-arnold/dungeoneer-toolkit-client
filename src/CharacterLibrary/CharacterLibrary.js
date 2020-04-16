import React, { Component } from "react";
import "./CharacterLibrary.css";
import { Link } from "react-router-dom";
import DungeoneerContext from "../DungeoneerContext";
class CharacterLibrary extends Component {
  static contextType = DungeoneerContext;

  render() {
    const { characters } = this.context;
    return (
      <main>
        <section className="FlexboxContainer">
          {characters.map((character) => {
            return (
              <div key={character.id} className="CharacterBox">
                <Link to={`/library/character/${character.id}`}>
                  {character.name}
                  <img alt={character.name} src={character.imageURL} />
                </Link>
              </div>
            );
          })}
        </section>
      </main>
    );
  }
}

export default CharacterLibrary;
