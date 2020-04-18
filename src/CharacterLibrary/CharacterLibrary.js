import React from "react";
import "./CharacterLibrary.css";
import { Link } from "react-router-dom";

const Character = ({ id, name, imageURL }) => {
  return (
    <div key={id} className="CharacterBox">
      <Link to={`/character/${id}`}>
        {name}
        <img alt={name} src={imageURL} />
      </Link>
    </div>
  );
};
const CharacterLibrary = ({ characters }) => {
  return (
    <main>
      <section className="FlexboxContainer">
        {characters.map((character) => {
          console.log(character);
          return (
            <Character
              id={character.id}
              name={character.name}
              imageURL={character.imageURL}
            />
          );
        })}
      </section>
    </main>
  );
};

export default CharacterLibrary;
