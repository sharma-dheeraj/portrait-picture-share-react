import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <div className="App__header">
        <img
          className="App__headerImage"
          src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <h1>react-instagram-clone</h1>
      <Post />
    </div>
  );
}

export default App;
