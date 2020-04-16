import React, { Component } from "react";
import "./Sheet.css";
import SheetNav from "./SheetNav/SheetNav";
import UpdateSheetForm from "./UpdateSheetForm/UpdateSheetForm";
import PlaySheet from "./PlaySheet/PlaySheet";
class Sheet extends Component {
  render() {
    const { match } = this.props;
    return (
      <main>
        <h2>Your Character Sheet</h2>
        <SheetNav match={match} />
        <PlaySheet match={match} />
        <UpdateSheetForm />
      </main>
    );
  }
}

export default Sheet;
