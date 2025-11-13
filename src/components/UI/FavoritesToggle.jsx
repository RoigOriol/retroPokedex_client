import React from "react";
import { useFavorites } from "../../context/FavoritesContext";
import cor from '../../assets/images/cor.png';      
import corNeg from '../../assets/images/corNeg.png'; 
function FavoritesToggle({ pokemon }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <button
      style={{
        fontSize: "1.5rem",
        background: "transparent",
        border: "none",
        cursor: "pointer"
      }}
      onClick={() => toggleFavorite(pokemon)}
    >
            {isFavorite(pokemon.id) ? (
        <img src={cor} alt="Corazón lleno" style={{ width: 40, height: 40 }} />
      ) : (
        <img src={corNeg} alt="Corazón vacío" style={{ width: 40, height: 40 }} />
      )}
    </button>
  );
}

export default FavoritesToggle;
