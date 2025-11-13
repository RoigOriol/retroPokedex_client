import { useState, useEffect } from 'react';
import { getAllPokemon } from '../services/pokeapi';

export const usePokemon = (limit = 20, offset = 0) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPokemon(limit, offset).then(data => {
      setPokemonList(data.results);
      setLoading(false);
    });
  }, [limit, offset]);

  return { pokemonList, loading };
};
