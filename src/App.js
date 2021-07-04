import "./App.css";
import React, { useState } from "react";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "dhiru__sharma",
      imageURL:
        "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg",
      caption: "great post!!!",
    },
    {
      username: "abcd",
      caption: " xdgfchgvjhbk dgfchgvjhb dgfchgvjhb fdxgfc",
      imageURL:
        "https://i.pinimg.com/originals/eb/07/8f/eb078f2cdeedb55a999c8841cee215d4.jpg",
    },
  ]);
  return (
    <div className="App">
      <div className="App__header">
        <img
          className="App__headerImage"
          src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      {posts.map((post) => (
        <Post
          username={post.username}
          imageURL={post.imageURL}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default App;
