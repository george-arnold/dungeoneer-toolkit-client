import React from "react";
import "./SheetNav.css";
import { Link } from "react-router-dom";

const SheetNav = ({ id }) => {
  return (
    <nav className="SheetNav">
      <Link to={`/character/${id}/edit`}>Edit</Link>
      <Link to={`/character/${id}`}>View/Play</Link>
    </nav>
  );
};

export default SheetNav;
