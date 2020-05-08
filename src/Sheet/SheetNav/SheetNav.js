import React from "react";
import "./SheetNav.css";
import { Link, useLocation } from "react-router-dom";

const SheetNav = ({ id }) => {
  const location = useLocation();
  // if URL is edit
  const edit = location.pathname.substr(-4) === "edit";

  return (
    <nav className="SheetNav">
      <Link className={edit ? "inactive" : "active"} to={`/character/${id}`}>
        View/Play
      </Link>
      <Link
        className={edit ? "active" : "inactive"}
        to={`/character/${id}/edit`}
      >
        Edit
      </Link>
    </nav>
  );
};

export default SheetNav;
