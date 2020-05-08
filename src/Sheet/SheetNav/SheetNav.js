import React, { useState } from "react";
import "./SheetNav.css";
import { Link } from "react-router-dom";

const SheetNav = ({ id }) => {
  const [activeClass, setActiveClass] = useState(false);

  return (
    <nav className="SheetNav">
      <Link
        onClick={() => setActiveClass(!activeClass)}
        className={activeClass ? "active" : "inactive"}
        to={`/character/${id}/edit`}
      >
        Edit
      </Link>
      <Link
        onClick={() => setActiveClass(!activeClass)}
        className={activeClass ? "inactive" : "active"}
        to={`/character/${id}`}
      >
        View/Play
      </Link>
    </nav>
  );
};

export default SheetNav;
