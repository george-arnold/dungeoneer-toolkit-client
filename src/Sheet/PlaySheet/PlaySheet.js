import React, { Component } from "react";
import "./PlaySheet.css";
import DungeoneerContext from "../../DungeoneerContext";
class PlaySheet extends Component {
  static contextType = DungeoneerContext;
  render() {
    const { characters } = this.context;
    const { id } = this.props.match.params;
    return (
      <main>
        <section>{characters[Number(id)].name}</section>
      </main>
    );
  }
}

export default PlaySheet;
