import React, { useState } from "react";
import "./GamePad.css";
import ButtonList from "../ButtonList/ButtonList";

const GamePad = (props) => {
  const [value, changeValue] = useState(null);
  const { attackBonus, attackStat } = props;
  return (
    <section className="GamePad">
      <ButtonList
        id={props.id}
        changeValue={changeValue}
        attackBonus={attackBonus}
        attackStat={attackStat}
      />
      <h2>{value}</h2>
      {/* take damage section */}
    </section>
  );
};

export default GamePad;
