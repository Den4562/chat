import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { useAppContext } from "../utils/context";

export default function Login() {
  const { auth, firebase } = useAppContext();
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(user);
  };
  return (
    <Container>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        style={{ height: window.innerHeight - 50 }}
      >
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          style={{ width: 400, background: "#fafafa", borderRadius: 15 }}
        >
          <Box p={5}>
            <Button color={"warning"} variant={"outlined"} onClick={login}>
              Увiйти через
              <img
                style={{ marginLeft: "10px" }}
                width={80}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
              />{" "}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
