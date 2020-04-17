import React, { useState } from "react";
import "./ButtonList.css";

const ButtonList = (props) => {
  const [dieRolled, setDieRoll] = useState(null);

  const randomNumber = (diceValue) => {
    return Math.floor(Math.random() * Math.floor(diceValue)) + 1;
  };

  //  find selected character
  //  observe character's class
  // use relevant modifier to class

  // const character = this.context.characters[id];
  // const charClass = character.class;
  // let attackBonus = null;
  // let attackType = "";
  // if (charClass === "Brute") {
  //   attackBonus = character.constitution / 2 - 5;
  //   attackType = "Constitution";
  // }
  // if (charClass === "Warrior") {
  //   attackBonus = character.strength / 2 - 5;
  //   attackType = "Strength";
  // }
  // if (charClass === "Thief") {
  //   attackBonus = character.dexterity / 2 - 5;
  //   attackType = "Dexterity";
  // }
  // if (charClass === "Mage") {
  //   attackBonus = character.intelligence / 2 - 5;
  //   attackType = "Intelligence";
  // }
  // if (charClass === "Hunter") {
  //   attackBonus = character.wisdom / 2 - 5;
  //   attackType = "Wisdom";
  // }
  // if (charClass === "Bard") {
  //   attackBonus = character.charisma / 2 - 5;
  //   attackType = "Charisma";
  // }

  let attackBonus = 5;
  let attackType = "not implemented";

  const diceArray = [4, 6, 8, 10, 20];

  return (
    <div className="ButtonList">
      {diceArray.map((dieValue) => {
        return (
          //creates a button for each kind of die
          <button
            key={dieValue}
            onClick={() => {
              props.changeValue(randomNumber(dieValue));
              setDieRoll(dieValue);
            }}
          >
            d{dieValue}
          </button>
        );
      })}
      {/* needs to be randomnumber20 + relevant character class stat */}
      <button
        onClick={() => {
          props.changeValue(randomNumber(20) + attackBonus);
          setDieRoll(`20 + ${attackBonus} (${attackType} )`);
        }}
      >
        Attack Roll
      </button>
      <div className="WhatWasRolled">
        {dieRolled && <h4>Die rolled: d{dieRolled}</h4>}
      </div>
    </div>
  );
};
export default ButtonList;
