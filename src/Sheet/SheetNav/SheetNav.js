import React, { Component } from "react";
import "./SheetNav.css";
import { Link } from "react-router-dom";

class SheetNav extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <nav className="SheetNav">
        <Link to="/edit">Edit Character</Link>
        <Link to={`/${id}`}>Play Character</Link>
        <Link to="/library">Back to Library</Link>
      </nav>
    );
  }
}

export default SheetNav;
