import React from "react";
import "./CharacterLibrary.css";
import { Route, Link } from "react-router-dom";
import CharacterDataSTORE from "../CharacterDataSTORE";
import Sheet from "../Sheet/Sheet";

const CharacterLibrary = () => {
  const { characters } = CharacterDataSTORE;
  return (
    <main>
      <section className="FlexboxContainer">
        {characters.map((character) => {
          return (
            <div key={character.id} className="CharacterBox">
              <Link to={`/library/${character.id}`}>
                {character.name}
                <img alt={character.name} src={character.imageURL} />
              </Link>
            </div>
          );
        })}
      </section>
      <Route
        path={`/library/:characterId`}
        render={(props) => <Sheet {...props} characters={characters} />}
      />
    </main>
  );
};

export default CharacterLibrary;
