// src/components/Pokemons/PokemonList.jsx

import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonList({ pokemons }) {
  if (!pokemons || pokemons.length === 0) return <p>No hi ha resultats 😞</p>;

  return (
    <div className="pokemons-grid">
      {pokemons.map((pokemon, idx) => (
        <PokemonCard key={idx} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default PokemonList;
