import React, { createContext, useState, useContext } from 'react';

// Creem el context
const FavoritesContext = createContext();

// Custom hook per accedir fàcilment
export const useFavorites = () => useContext(FavoritesContext);

// Provider del context
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (pokemon) => {
    if (favorites.find(fav => fav.id === pokemon.id)) {
      setFavorites(favorites.filter(fav => fav.id !== pokemon.id));
    } else {
      setFavorites([...favorites, pokemon]);
    }
  };

  const isFavorite = (pokemonId) => {
    return favorites.some(fav => fav.id === pokemonId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
