const POKEAPI_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getAllPokemon = async (limit = 20, offset = 0) => {
  const res = await fetch(`${POKEAPI_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  return res.json();
};

export const getPokemonByName = async (name) => {
  const res = await fetch(`${POKEAPI_BASE_URL}/pokemon/${name}`);
  return res.json();
};

export const getPokemonTypes = async () => {
  const res = await fetch(`${POKEAPI_BASE_URL}/type`);
  return res.json();
};
