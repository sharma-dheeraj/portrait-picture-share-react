import React, { useState, useEffect } from "react";
import "../styles/Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "../firebase";

function Post({ username, imageURL, caption, postId }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc("postId")
        .collection("comments")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {};

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src="/static/images/avatar.1.jpg"
        />
        <h3>{username}</h3>
      </div>

      <img className="post__image" src={imageURL} alt="post" />
      <p className="post__text">
        <strong>{username} </strong> {caption}
      </p>

      <div className="post__comments">
        {comments.map((comment) => (
          <p>
            <strong>{comment.username}</strong>
            {comment.text}
          </p>
        ))}
      </div>
      <form className="post__commentBox">
        <input
          className="post__comment"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComments(e.target.value)}
        ></input>
        <button
          className="post__button"
          disabled={!comment}
          type="submit"
          onClick={postComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
