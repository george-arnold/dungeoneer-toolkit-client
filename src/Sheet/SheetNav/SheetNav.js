import React from "react";
import "./SheetNav.css";
import { Link } from "react-router-dom";

const SheetNav = ({ id }) => {
  return (
    <nav className="SheetNav">
      <Link to={`/character/${id}/edit`}>Edit Character</Link>
      <Link to={`/character/${id}`}>Play Character</Link>
      <Link to="/library">Back to Library</Link>
    </nav>
  );
};

export default SheetNav;
