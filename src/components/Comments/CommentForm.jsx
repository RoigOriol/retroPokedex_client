import React, { useState } from "react";
import axios from "axios";

function CommentForm({ pokemonId, getData }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/chats`, {
        pokemonId,
        content,
      })
      .then(() => {
        setContent("");
        getData();
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Escriu un comentari..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="button">Afegir</button>
    </form>
  );
}

export default CommentForm;
