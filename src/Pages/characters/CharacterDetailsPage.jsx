import React from "react";
import { useLocation } from "react-router-dom";
import "./CharacterDetailsPage.css";


function CharacterDetailsPage() {
  const location = useLocation();
  const character = location.state?.character; // Get the full character object from state

  if (!character) {
    return (
      <div className="character-details-page">
        <div className="error-message">Character data not available</div>
      </div>
    );
  }

  return (
    <div className="character-details-page">
      <div className="character-detail-container">
        <h1 className="character-name">{character.name}</h1>
        <img
          src={character.image}
          alt={character.name}
          className="character-detail-image"
        />
        <p className="character-description">{character.description}</p>
      </div>
    </div>
  );
}

export default CharacterDetailsPage;