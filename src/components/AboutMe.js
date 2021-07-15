import React from "react";
import "../styles/Post.css";
import logopic from "../images/portrait.png";

function Post() {
  return (
    <div className="post">
      <a href="https://github.com/sharma-dheeraj">
        <div className="post__header">
          <h1 style={{ margin: "auto" }}>About Portrait </h1>
        </div>

        <img className="post__image" src={logopic} alt="post" />
        <p className="post__text">
          Portrait is a web app that can be used to upload photos from your
          account,view photos shared by other accounts and comment on your own
          or others photos.
          <br />
          <br />
          <h3>Tech stack used</h3>
          <br />
          <span>Page and components: </span>ReactJS, JSX, HTML
          <br />
          <span>Styling: </span>CSS5 and MaterialUI
          <br />
          <span>Authentication and Storage: </span>Firebase and firestore
          <br />
          <br />
          <span>Created by :</span>Dheeraj K Sharma
          <br />
          <span>
            <a href="https://github.com/sharma-dheeraj">Github Profile</a>
          </span>
          <br />
          <span>
            <a href="https://www.linkedin.com/in/dheeraj-s">LinkedIn Profile</a>
          </span>
        </p>
      </a>
    </div>
  );
}

export default Post;
