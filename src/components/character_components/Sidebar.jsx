import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/characters_home">Featuring Characters</Link>
        </li>
        <li>
          <Link to="/characters">All Characters</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
