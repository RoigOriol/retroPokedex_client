import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonList from "../components/Pokemons/PokemonList";

function TypeFilterPage() {
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/type`)
      .then((res) => {
        // res.data.results és un array com [ { name: "normal", url: "..." }, ..., {name:"unknown",...}, {name:"shadow", ...} ]
        // Filtrar els dos últims:
        const filteredTypes = res.data.results.filter(
          (t) => t.name !== "unknown" && t.name !== "stellar"
        );
        setTypes(filteredTypes);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedType) {
      axios
        .get(selectedType.url)
        .then((res) => {
          // res.data.pokemon és un array d'objectes { pokemon: { name, url }, slot: x }
          const filtered = res.data.pokemon.map((p) => p.pokemon);
          setPokemons(filtered);
        })
        .catch((err) => console.error(err));
    }
  }, [selectedType]);

  return (
    <div className="type-filter-page">
      <h2>Filtra per tipus</h2>

      <div className="filter-buttons">
        {types.map((type, idx) => (
          <button
            key={idx}
            className="button"
            onClick={() => setSelectedType(type)}
          >
            {type.name}
          </button>
        ))}
      </div>

      {selectedType && <PokemonList pokemons={pokemons} />}
    </div>
  );
}

export default TypeFilterPage;
