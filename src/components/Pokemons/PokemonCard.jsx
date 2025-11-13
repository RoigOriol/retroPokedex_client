// src/components/Pokemons/PokemonCard.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavoritesToggle from "../UI/FavoritesToggle";
import '../../styles/PokemonCard.css';

function PokemonCard({ pokemon }) {
  const [imageUrl, setImageUrl] = useState(null);

  // Extreure l'ID a partir de l'URL de PokeAPI (p.ex. "https://pokeapi.co/api/v2/pokemon/2/")
  const getPokemonId = () => {
    const parts = pokemon.url.split("/");
    return parts[parts.length - 2];
  };

  const id = getPokemonId();

  useEffect(() => {
    let isCancelled = false;

    async function fetchSprite() {
      try {
        // Crida a l'endpoint de PokeAPI per a aquest Pokémon concret
        const res = await fetch(pokemon.url);
        const data = await res.json();
        if (!isCancelled) {
          // Guardem la URL de la imatge 'front_default' que retorna PokeAPI
          setImageUrl(data.sprites.front_default);
          console.log(data)
        }
      } catch (err) {
        console.error("Error carregant l’sprite des de PokeAPI:", err);
      }
    }

    fetchSprite();

    return () => {
      isCancelled = true;
    };
  }, [pokemon]);

  return (
    <div className="pokemon-card">
      <h4>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>

      {imageUrl ? (
        <img src={imageUrl} alt={pokemon.name} />
      ) : (
        <p>Loading image…</p>
      )}

      <FavoritesToggle pokemon={{ id, name: pokemon.name }} />

      <Link to={`/pokemon/${id}`}>
        <button className="button">Detall</button>
      </Link>
    </div>
  );
}

export default PokemonCard;
