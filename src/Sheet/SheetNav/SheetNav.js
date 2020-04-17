import React from "react";
import "./SheetNav.css";
import { Link } from "react-router-dom";

const SheetNav = (props) => {
  const { id } = props;
  return (
    <nav className="SheetNav">
      <Link to="/edit">Edit Character</Link>
      <Link to={`/${id}`}>Play Character</Link>
      <Link to="/library">Back to Library</Link>
    </nav>
  );
};

export default SheetNav;
