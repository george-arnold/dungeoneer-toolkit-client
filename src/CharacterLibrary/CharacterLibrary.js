import React from "react";
import "./CharacterLibrary.css";
import { Link } from "react-router-dom";
const CharacterLibrary = (props) => {
  const { characters } = props;
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
      {/* <Route
        path={`${match.path}/:characterId`}
        render={(props) => <Sheet {...props} characters={characters} />}
      /> */}
    </main>
  );
};

export default CharacterLibrary;
