import { Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import Message from "./Message";
import { useAppContext } from "../utils/context";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Loader from "./Loader";

export default function Chat() {
  const [value, setValue] = useState("");
  const { auth, firestore, firebase } = useAppContext();
  const [user] = useAuthState(auth);
  console.log(user);

  // хук отримання повідомлень
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );
  if (loading) {
    return <Loader />;
  }
  // console.log(messages);
  // відправка повідомлень
  const sendMessage = async () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoUrl: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("");
  };

  return (
    <Container>
          {" "}
      <Grid
        container
        justifyContent={"center"}
        alignContent={"flex-start"}
        style={{ height: window.innerHeight - 50, marginTop: "10px" }}
      >
               <Message messages={messages} />
              {" "}
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"center"}
          style={{
            width: "80%",
            marginTop: "20px",
            backgroundColor: "#fafafa",
          }}
        >
                  {" "}
          <TextField
            variant={"outlined"}
            maxRows={2}
            style={{ width: "50%" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
                  {" "}
          <Button
            onClick={sendMessage}
            variant={"contained"}
            style={{ marginLeft: "5px", width: "20%", height: "100%" }}
          >
            Надіслати{" "}
          </Button>
                {" "}
        </Grid>
            {" "}
      </Grid>
        {" "}
    </Container>
  );
}
