import React, { useState } from "react";
import CharacterData from "../../data/CharacterData.json"; // Import JSON file
import "./CharacterPage.css";

function CharactersPage() {
  const [selectedCharacter, setSelectedCharacter] = useState(null); // State for selected character
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character); // Set the clicked character as selected
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedCharacter(null); // Clear the selected character
  };

  return (
    <div className="characters-page">
      <main className="main-content">
        <h1 className="page-title">All Characters</h1>
        <div className="character-list">
          {CharacterData.map((character, index) => (
            <div
              key={index}
              className="character-item"
              onClick={() => handleCharacterClick(character)}
            >
              <img
                src={character.image}
                alt={character.name}
                className="character-img"
              />
              <p className="character-name">{character.name}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Modal Component */}
      {isModalOpen && selectedCharacter && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing on content click
          >
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <img
              src={selectedCharacter.image}
              alt={selectedCharacter.name}
              className="modal-image"
            />
            <div className="modal-info">
              <h2>{selectedCharacter.name}</h2>
              <p>{selectedCharacter.description}</p>
              <p><strong>Height:</strong> {selectedCharacter.height || "Unknown"}</p>
              <p><strong>Weight:</strong> {selectedCharacter.weight || "Unknown"}</p>
              <p><strong>Eye Color:</strong> {selectedCharacter.eyeColor || "Unknown"}</p>
              <p><strong>Main Ability:</strong> {selectedCharacter.mainAbility || "Unknown"}</p>
              <p><strong>Strength Level:</strong> {selectedCharacter.strengthLevel || "Unknown"}</p>
            </div>
            <div className="modal-story">
              <h3>Story</h3>
              <p>{selectedCharacter.story || "Story not available."}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CharactersPage;