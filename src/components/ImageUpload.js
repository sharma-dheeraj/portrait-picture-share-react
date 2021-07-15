import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { storage, db } from "../firebase";
import firebase from "firebase";
import "../styles/ImageUpload.css";

function ImageUpload({ username }) {
  const [caption, setCaption] = useState("");
  const [img, setImg] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
    if (event.target.files[0]) {
      setImg(event.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${img.name}`).put(img);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progress bar function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //   error function
        console.log(error);
        alert(error.message);
      },
      () => {
        //   complete function
        storage
          .ref("images")
          .child(img.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageURL: url,
              username: username,
            });

            setProgress(0);
            setCaption("");
            setImg(null);
          });
      }
    );
  };

  return (
    <div className="imageUpload">
      <progress value={progress} max="100" />
      <input
        type="text"
        placeholder="Add a caption..."
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
