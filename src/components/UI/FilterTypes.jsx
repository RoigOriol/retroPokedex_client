import React, { useEffect, useState } from "react";
import axios from "axios";

function FilterTypes({ pokemons, setFilteredPokemons }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/type`)
      .then((res) => {
        setTypes(res.data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  const filterByType = (typeUrl) => {
    axios
      .get(typeUrl)
      .then((res) => {
        const filtered = res.data.pokemon.map((p) => p.pokemon);
        setFilteredPokemons(filtered);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="filter-types">
      <button className="button" onClick={() => setFilteredPokemons(pokemons)}>
        Tots
      </button>
      {types.map((type, idx) => (
        <button
          key={idx}
          className="button"
          onClick={() => filterByType(type.url)}
        >
          {type.name}
        </button>
      ))}
    </div>
  );
}

export default FilterTypes;
