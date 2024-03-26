import { Avatar, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { parseFirebaseTime } from "../utils/formatDate";
import { useRef } from "react";

export default function Message({ messages }) {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div
      style={{
        width: "80%",
        height: "80vh",
        backgroundColor: "#fafafa",
        overflowY: "auto",
        borderRadius: 10,
        padding: 30,
      }}
    >
      {messages.map(({ photoUrl, displayName, text, createdAt }, index) => (
        <div
          key={createdAt}
          ref={index === messages.length - 1 ? messagesEndRef : null}
        >
          <Grid container key={createdAt} alignItems={"center"}>
            <Avatar src={photoUrl} />
            <Grid
              contauner
              color="white"
              style={{
                width: "auto",
                backgroundColor: "#806491",
                margin: "0 10px 10px 10px",
                maxWidth: "30%",
                borderRadius: "20px 20px 20px 0px",
                padding: "10px",
              }}
            >
              <Grid>
                <p>{displayName}</p>
                {/* <p>{parseFirebaseTime(createdAt)}</p> */}
              </Grid>
              <p>{text}</p>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
}
