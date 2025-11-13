import React from "react";

function Pagination({ totalPokemons, pokemonsPerPage, currentPage, setCurrentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`button ${currentPage === number ? "active" : ""}`}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
