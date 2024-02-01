import React, { useEffect } from "react";
import { Typography } from "@mui/material";

const Waiting = () => {

  // useEffect(() => {
  //   while (true) {
  //     // fetch from the endpoint which gives indication that the server has been started
  //   }
  // }, [])

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      height: "100%",
      alignItems: "center"
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column", 
        alignItems: "center",
        transform: "translateY(-50%)"
      }}>
        <Typography>Waiting on the Server to start.</Typography>
        <div class="lds-circle"><div></div></div>
      </div>
    </div>
  )

}

export default Waiting;