import React from "react";
import "./CharacterLibrary.css";
import { Link } from "react-router-dom";
import characters from "../CharacterDataSTORE";
const Character = ({ id, name, imageURL }) => {
  return (
    <div className="CharacterBox">
      <Link to={`/character/${id}`}>
        {name}
        <img alt={name} src={imageURL} />
      </Link>
    </div>
  );
};
const CharacterLibrary = () => {
  console.log(characters);
  return (
    <main>
      <section className="FlexboxContainer">
        {characters.map((character) => {
          return (
            <Character
              id={character.id}
              name={character.name}
              imageURL={character.imageURL}
              key={character.id}
            />
          );
        })}
      </section>
    </main>
  );
};

export default CharacterLibrary;
