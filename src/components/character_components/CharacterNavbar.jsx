import React from "react";
import { Link } from "react-router-dom";
import "./CharacterNavbar.css";

function CharacterNavbar() {
  return (
    <div className="characterNavbar">
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

export default CharacterNavbar;