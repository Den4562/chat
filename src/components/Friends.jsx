import React from "react";
import { Avatar, Container, Grid } from "@mui/material";
export const Friends = ({ users }) => {
  return (
    <Container>
      <Grid>
        {users.map(({ name, photoUrl }) => (
          <Grid
            container
            alignItems={"center"}
            gap={"10px"}
            // border={"1px solid tomato "}
            borderRadius={"10px"}
            padding={"10px"}
          >
            <Avatar src={photoUrl} />
            <Grid
              bgcolor={"#434e74"}
              color={"white"}
              padding={"10px"}
              borderRadius={"20px"}
            >
              <p>{name}</p>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
