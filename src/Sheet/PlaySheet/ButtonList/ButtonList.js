import React, { useState } from "react";
import "./ButtonList.css";

const Button = () => {};
const ButtonList = (props) => {
  const [dieRolled, setDieRoll] = useState(null);

  const randomNumber = (diceValue) => {
    return Math.floor(Math.random() * Math.floor(diceValue)) + 1;
  };
  const { attackBonus, attackStat } = props;

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
          setDieRoll(`20 + ${attackBonus} (${attackStat} )`);
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
