// src/components/Pokemons/PokemonDetail.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    async function fetchPokemonDetail() {
      try {
        // Cridem l'endpoint PokeAPI per a aquest id
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        if (!isCancelled) {
          setPokemon(data);
        }
      } catch (err) {
        console.error("Error carregant el Pokémon des de PokeAPI:", err);
      }
    }

    fetchPokemonDetail();

    return () => {
      isCancelled = true;
    };
  }, [id]);

  if (!pokemon) return <p>Loading…</p>;

 return (
  <div className="pokemon-detail-layout">
    <div className="pokemon-detail-columns">
      {/* Columna esquerra: fitxa del Pokémon */}
      <div className="ficha-caracter">
        <h3>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h3>
        <p>
          <strong>Height:</strong> {pokemon.height / 10} m
        </p>
        <p>
          <strong>Weight:</strong> {pokemon.weight} kg
        </p>
        <p>
          <strong>ID:</strong> {pokemon.id}
        </p>
        <img
          src={pokemon.sprites.front_default}
          style={{ height: "200px" }}
          alt={pokemon.name}
        />
        <StatsChart stats={pokemon.stats} />
      </div>

      {/* Columna dreta: només comentaris */}
      <div className="pokemon-detail-comments">
        <CommentList comments={comments} getData={getData} />
        <CommentForm pokemonId={pokemon.id} getData={getData} />
      </div>
    </div>

    {/* Sota de tot: favorits i botons */}
    <div className="pokemon-detail-bottom">
      <FavoritesToggle pokemon={pokemon} />
      <div className="pokemon-detail-buttons">
        <Link to="/types">
          <button className="button">All types</button>
        </Link>
        <button className="button" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  </div>
);
};

export default PokemonDetail;
