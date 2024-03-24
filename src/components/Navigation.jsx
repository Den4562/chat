import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import React from "react";
import { useAppContext } from "../utils/context";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";

export default function Navigation() {
  const { auth } = useAppContext();
  const [user] = useAuthState(auth);
  return (
    <AppBar color={"default"} position={"static"}>
      <Toolbar>
        <Grid container justifyContent={"flex-end"}>
          {user ? (
            <Button
              color={"warning"}
              varinant={"outlined"}
              onclick={() => auth.signOut()}
            >
              Вийти
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button color={"primary"} varinant={"outlined"}>
                Увiйти
              </Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
