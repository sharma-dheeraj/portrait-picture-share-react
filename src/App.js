import "./App.css";
import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import { auth, db } from "./firebase";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";
import ImageUpload from "./components/ImageUpload";
import logo from "./images/portrait_logo.png";
import AboutMe from "./components/AboutMe";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const [openSignin, setOpenSignin] = useState(false);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user, username]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() }))
        );
      });
  }, []);

  const signUp = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));

    setOpen(false);
  };

  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));

    setOpenSignin(false);
  };

  return (
    <div className="App">
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="App__signup">
            <center>
              <img className="App__headerImage" src={logo} alt="" />
            </center>
            <Input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Input>
            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <Button type="submit" onClick={signUp}>
              SignUp
            </Button>
          </form>
        </div>
      </Modal>
      <Modal open={openSignin} onClose={() => setOpenSignin(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="App__signup">
            <center>
              <img className="App__headerImage" src={logo} alt="" />
            </center>
            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <Button type="submit" onClick={signIn}>
              SignIn
            </Button>
          </form>
        </div>
      </Modal>
      <div className="App__header">
        <img className="App__headerImage" src={logo} alt="" />
        {user ? (
          <Button
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </Button>
        ) : (
          <div className="App__loginContainer">
            <Button onClick={() => setOpenSignin(true)}>
              {" "}
              <strong>Sign In</strong>
            </Button>
            <Button onClick={() => setOpen(true)}>
              <strong>Sign Up</strong>{" "}
            </Button>
          </div>
        )}
      </div>
      <div className="App__posts">
        <div className="App__postsLeft">
          {posts.map(({ id, post }) => (
            <Post
              key={id}
              user={user}
              postId={id}
              username={post.username}
              imageURL={post.imageURL}
              caption={post.caption}
            />
          ))}
        </div>
        <div className="App__postsRight">
          <AboutMe />
        </div>
      </div>

      {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <center style={{ padding: "20px" }}>
          <h3>Login to upload</h3>
        </center>
      )}
    </div>
  );
}

export default App;
