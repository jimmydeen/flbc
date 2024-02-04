import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Waiting = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const checkServerReady = async () => {
      try {
        const response = await fetch('http://localhost:8000/check_server');
        if (response.status === 200) {
          navigate('/getClientProgram');
        } 
      } catch (err) {
        console.error(err);
      }
    }
    // function checkServer() {
    //  fetch('http://localhost:5000/check_server')
    //      .then(response => {
    //          if (response.status === 200) {
    //              // Server has started, change the page
    //              navigate('/getClientProgram');
    //          } else {
    //              // Server has not started, check again in 5 seconds
    //              setTimeout(checkServer, 5000);
    //          }
    //      });
    // }
    // checkServer();
    checkServerReady();
    const polling = setInterval(() => {
      checkServerReady();
    }, 5000);

    return () => clearInterval(polling);
  }, [navigate])

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