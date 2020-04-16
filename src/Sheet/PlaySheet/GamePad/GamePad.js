import React, { Component } from "react";
import "./GamePad.css";
import ButtonList from "../ButtonList/ButtonList";

class GamePad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  changeValue = (value) => {
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <section>
        <ButtonList changeValue={this.changeValue} />
        <h2>{value}</h2>
      </section>
    );
  }
}

export default GamePad;
