import React, { Component } from "react";
import "./Sheet.css";
import SheetNav from "./SheetNav/SheetNav";
import UpdateSheetForm from "./UpdateSheetForm/UpdateSheetForm";
import PlaySheet from "./PlaySheet/PlaySheet";
// import CharacterNavContext from "../CharacterNavContext";

class Sheet extends Component {
  render() {
    const { match } = this.props;
    // const { id } = this.props.match.params;
    // const value = {
    //   id: id,
    // };
    return (
      <main>
        {/* <CharacterNavContext.Provider value={value}> */}

        <h2>Your Character Sheet</h2>
        <SheetNav match={match} />
        <UpdateSheetForm match={match} />
        <PlaySheet match={match} />

        {/* </CharacterNavContext.Provider> */}
      </main>
    );
  }
}

export default Sheet;
