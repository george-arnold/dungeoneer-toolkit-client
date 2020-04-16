import React, { Component } from "react";
import "./ButtonList.css";

class ButtonList extends Component {
  randomNumber = (diceValue) => {
    return Math.floor(Math.random() * Math.floor(diceValue)) + 1;
  };
  render() {
    //  find selected character
    //  observe character's class
    // use relevant modifier to class
    const attackStat = 100;
    const diceArray = [4, 6, 8, 10, 20];
    return (
      <div className="ButtonList">
        {diceArray.map((dieValue) => {
          return (
            //creates a button for each kind of die
            <button
              key={dieValue}
              onClick={() =>
                this.props.changeValue(this.randomNumber(dieValue))
              }
            >
              d{dieValue}
            </button>
          );
        })}
        {/* needs to be randomnumber20 + relevant character class stat */}
        <button
          onClick={() =>
            this.props.changeValue(this.randomNumber(20) + attackStat)
          }
        >
          Attack Roll
        </button>
      </div>
    );
  }
}

export default ButtonList;
