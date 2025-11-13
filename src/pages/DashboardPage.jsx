// DashboardPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/DashboardPage.css";
import pokemonLogo from '../assets/images/pokemonLogoGreen.png';

function DashboardPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="spinner">
          <img src={pokemonLogo} alt="Pokémon Logo" className="pokemon-spinner" />
        </div>
        <h1>Pokédex</h1>
        <Link to="/pokemons">
          <button className="start-button retro-blink">Start</button>
        </Link>
      </div>
    </div>
  );
}

export default DashboardPage;
