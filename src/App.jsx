import React from "react"; // Eliminem useState i useEffect si no hi ha menú intern
import { Routes, Route, Link, useLocation } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import AllPokemonsPage from "./pages/AllPokemonsPage";
import PokemonDetailPage from "./pages/PokemonDetailPage";
import TypeFilterPage from "./pages/TypeFilterPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import ThemeToggle from "./components/UI/ThemeToggle";

// Component per a la barra de navegació retro
function RetroNavBar() {
  return (
    <nav className="retro-navbar">
      <div className="retro-nav-links">
        <Link to="/" className="retro-nav-item">Home</Link>
        <Link to="/pokemons" className="retro-nav-item">Tots</Link>
        <Link to="/types" className="retro-nav-item">Tipus</Link>
        <Link to="/about" className="retro-nav-item">About</Link>
      </div>
      <div className="retro-nav-theme-toggle">
        <ThemeToggle />
      </div>
    </nav>
  );
}

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
 
    <div className="gameboy-screen retro-app-container"> {/* Contenidor principal amb estil de pantalla GB */}
      
      {!isHomePage && <RetroNavBar />} {/* Mostra la barra de navegació si no és la Home */}

      <main className="retro-app-content"> {/* Contingut principal de les rutes */}
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/pokemons" element={<AllPokemonsPage />} />
          <Route path="/types" element={<TypeFilterPage />} />
          <Route path="/pokemon/:pokemonCharacterId" element={<PokemonDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      
      
      { <footer className="retro-footer">
        <p>(C) Pokedex 2025</p>
      </footer> }
    </div>
  );
}

export default App;