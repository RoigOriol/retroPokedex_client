import React from "react";
import axios from "axios";

function CommentItem({ comment, getData }) {
  const handleDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_URL}/chats/${comment.id}`)
      .then(() => getData())
      .catch((err) => console.error(err));
  };

  return (
    <div className="comment-item">
      <p>{comment.content}</p>
      <button className="button" onClick={handleDelete}>🗑️</button>
    </div>
  );
}

export default CommentItem;
