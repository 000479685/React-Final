import React from "react";
import CharacterCard from "../../components/character_components/CharacterCard";
import "./CharacterHomePage.css";
import characterData from "../../data/CharacterData.json"; // Import the JSON data
import Sidebar from "../../components/character_components/Sidebar";

function CharacterHomePage() {
  const featuredCharacters = characterData.slice(0, 2); // Select featured characters
  const allCharacters = characterData;

  return (
    <div className="homepage">
      <Sidebar />
      <header className="header">
        <h1>Game Characters Wiki</h1>
        <nav className="header-nav">
        </nav>
      </header>
      <section className="featured-characters">
        <h2>Featured Characters</h2>
        <div className="character-row">
          {featuredCharacters.map((char, index) => (
            <CharacterCard
              key={index}
              title={char.name}
              description={char.description}
              image={char.image}
            />
          ))}
        </div>
      </section>
      <section className="all-characters">
        <h2>All Characters</h2>
        <div className="character-grid">
          {allCharacters.map((char, index) => (
            <CharacterCard
              key={index}
              title={char.name}
              description={char.description || ""}
              image={char.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default CharacterHomePage;