import React from "react";
import CommentItem from "./CommentItem";

function CommentList({ comments, getData }) {
  if (!comments.length) return <p>No hi ha comentaris encara.</p>;

  return (
    <div className="comments-container">
      <h4>Comentaris</h4>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} getData={getData} />
      ))}
    </div>
  );
}

export default CommentList;
