import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h1>404 - Pàgina no trobada 🧯</h1>
      <p>Aquesta ruta no existeix. Torna a la pàgina principal:</p>
      <Link to="/" className="button">Home</Link>
    </div>
  );
}

export default NotFoundPage;
