import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "../components/Pokemons/PokemonList";
import SearchBar from "../components/UI/SearchBar";
import FilterTypes from "../components/UI/FilterTypes";
import Pagination from "../components/UI/Pagination";

function AllPokemonsPage() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 20;

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/pokemon?limit=800`)
      .then((response) => {
        setPokemons(response.data.results);
        setFilteredPokemons(response.data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    filterPokemons();
  }, [searchTerm]);

  const filterPokemons = () => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(filtered);
    setCurrentPage(1); // Tornem a la primera pàgina cada vegada que filtrem
  };

  // Paginació
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  return (
    <div className="page-container">
      <h2>Cerca els teus Pokémon</h2>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
   

      <PokemonList pokemons={currentPokemons} />

      <Pagination
        totalPokemons={filteredPokemons.length}
        pokemonsPerPage={pokemonsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default AllPokemonsPage;
