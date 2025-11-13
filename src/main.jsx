import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "./styles/App.css";
import "./styles/RetroStyles.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <FavoritesProvider>
          <App />
        </FavoritesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
