import React from "react";
import "./CharacterCard.css";

function CharacterCard({ title, description, image }) {
  return (
    <div className="character-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CharacterCard;