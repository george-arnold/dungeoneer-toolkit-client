import React, { useState } from "react";
import "./GamePad.css";
import ButtonList from "../ButtonList/ButtonList";

const GamePad = (props) => {
  const [value, changeValue] = useState(null);

  return (
    <section>
      <ButtonList id={props.id} changeValue={changeValue} />
      <h2>{value}</h2>
      {/* take damage section */}
    </section>
  );
};

export default GamePad;
