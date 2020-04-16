import React, { Component } from "react";
import "./SheetNav.css";
import { Link } from "react-router-dom";

class SheetNav extends Component {
  render() {
    return (
      <nav className="SheetNav">
        <Link to="/edit">Edit Character</Link>
        <Link to="/play">Play Character</Link>
      </nav>
    );
  }
}

export default SheetNav;
