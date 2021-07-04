import React from "react";
import "../styles/Post.css";

function Post() {
  return (
    <div className="post">
      <h3>Username</h3>
      {/*avatar*/}
      <img
        className="post__image"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
      />
      <p>
        <strong>Username: </strong> caption for the post
      </p>
    </div>
  );
}

export default Post;
