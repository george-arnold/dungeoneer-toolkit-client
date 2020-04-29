import React, { useState, useEffect } from "react";
import "./CharacterLibrary.css";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import config from "../config";

const Character = ({ id, name }) => {
  return (
    <div className="CharacterBox">
      <Link to={`/character/${id}`}>{name}</Link>
    </div>
  );
};
const CharacterLibrary = () => {
  const [characterLib, setCharacterLib] = useState([]);
  useEffect(() => {
    fetch(`${config.API_ENDPOINT}/characters`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
        "content-type": "application/json",
      },
    })
      .then((charactersRes) => {
        if (!charactersRes.ok) {
          return charactersRes.json().then((event) => Promise.reject(event));
        }
        return charactersRes.json();
      })
      .then((characterArray) => {
        //makes sure characters stay in order on load
        characterArray.sort((a, b) => a.id - b.id);
        setCharacterLib(characterArray);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <main className="CharacterLibrary">
      <h2>Character Library</h2>
      <h3>Select a Character to play or edit!</h3>
      <section className="FlexboxContainer">
        {characterLib.map((character) => {
          //prints character names
          return (
            <Character
              id={character.id}
              name={character.name}
              key={character.id}
            />
          );
        })}
      </section>
    </main>
  );
};

export default CharacterLibrary;
