import React from "react";
import "../styles/Post.css";
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="avatar"
          src="/static/images/avatar.1.jpg"
        />
        <h3>Username</h3>
      </div>

      <img
        className="post__image"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
      />
      <p className="post__text">
        <strong>Username </strong> caption for the post
      </p>
    </div>
  );
}

export default Post;
