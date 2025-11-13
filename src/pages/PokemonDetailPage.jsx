// src/pages/PokemonDetailPage.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import CommentList from "../components/Comments/CommentList";
import CommentForm from "../components/Comments/CommentForm";
import StatsChart from "../components/UI/StatsChart";
import FavoritesToggle from "../components/UI/FavoritesToggle";
import "../styles/PokemonDetailPage.css";
function PokemonDetailPage() {
  const [pokemon, setPokemon] = useState(null);
  const [comments, setComments] = useState([]);
  const { pokemonCharacterId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // 1) Primer anem al backend propi perquè guardi informació extra (comentaris, etc.)
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/pokemon/${pokemonCharacterId}`)
      .then((response) => {
        const pokemonData = response.data;
        
        // Fem un console.log per veure la URL de la imatge abans de guardar l'estat
        if (pokemonData.sprites && pokemonData.sprites.front_default) {
          console.log("📷 URL de la imatge:", pokemonData.sprites.front_default);
        } else {
          console.log("⚠️ Sprites no definits o sense front_default");
        }

        setPokemon(pokemonData);

        // 2) Després carreguem els comentaris associats
        return axios.get(
          `${import.meta.env.VITE_SERVER_URL}/chats?pokemonId=${pokemonData.id}`
        );
      })
      .then((commentsResponse) => {
        setComments(commentsResponse.data);
      })
      .catch((error) => {
        console.error("Error en getData:", error);
      });
  };

  // Si encara no hem carregat el Pokémon, mostrem "Loading..."
  if (!pokemon) return <p>Loading…</p>;

return (
  <div className="pokemon-detail-layout">
    <div className="pokemon-detail-columns">
      {/* Columna 1: fitxa del Pokémon */}
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
      </div>

      {/* Columna 2: estadístiques */}
      <div className="pokemon-stats">
        <StatsChart stats={pokemon.stats} />
      </div>

      {/* Columna 3: comentaris i accions */}
      <div className="pokemon-detail-comments">
        <FavoritesToggle pokemon={pokemon} />
        <CommentList comments={comments} getData={getData} />
        <CommentForm pokemonId={pokemon.id} getData={getData} />
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
  </div>
);


}

export default PokemonDetailPage;
