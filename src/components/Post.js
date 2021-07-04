import React from "react";
import "../styles/Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, imageURL, caption }) {
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

      <img className="post__image" src={imageURL} alt="image" />
      <p className="post__text">
        <strong>{username} </strong> {caption}
      </p>
    </div>
  );
}

export default Post;
