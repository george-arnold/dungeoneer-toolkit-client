import React, { useState, useEffect } from "react";
import "./CharacterLibrary.css";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import config from "../config";

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
  // const [characterLib, setCharacterLib] = useState([]);
  useEffect(() => {
    // fetch(`${config.API_ENDPOINT}/characters`, {
    //   method: "GET",
    //   headers: {
    //     authorization: `bearer ${TokenService.getAuthToken()}`,
    //   },
    // })
    //   .then((charactersRes) => {
    //     if (!charactersRes.ok) {
    //       return charactersRes.json().then((event) => Promise.reject(event));
    //     }
    //     return charactersRes.json();
    //   })
    //   .then((characterArray) => {
    //     setCharacterLib(characterArray);
    //   });
  });
  return (
    <main>
      {" "}
      Hi
      {/* <section className="FlexboxContainer">
        {characterLib.map((character) => {
          return (
            <Character
              id={character.id}
              name={character.name}
              imageURL={character.imageURL}
              key={character.id}
            />
          );
        })}
      </section> */}
    </main>
  );
};

export default CharacterLibrary;
