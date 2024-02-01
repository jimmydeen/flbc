import React, { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const portForBackend = 5000
const ManageRequest = ({ needPopup }) => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [serverAddress, setServerAddress] = useState();

  // polling request to the backend
  useEffect(() => {
    // const getStatus = async () => {
    //   const response = await fetch(`http://127.0.0.1:${portForBackend}`);
    //   const data = await response.json();

    //   for (const r in data.requests) {
    //     const requestItem = data.requests[r];
    //     if (requestItem.id == id) {
    //       console.log("found request item");
    //       console.log(requestItem);
    //       setStatus(requestItem);
    //       break;
    //     }
    //   }
    //   for (const s in data.joiningInfo) {
    //     const joinItem = data.joiningInfo[s];
    //     if (joinItem.id == id) {
    //       console.log("found join item");
    //       console.log(joinItem);
    //       setStatus(prev => {prev.joinDetails = joinItem; return prev});
    //       break;
    //     }
    //   }
    // }
    // getStatus();
  }, [])

  const startServer = () => {
    fetch(`http://127.0.0.1:${portForBackend}/start_server`, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        _server_address: serverAddress
      })
    })
    .then(res => res.json())
    .then(data => {
    })
    .catch(err => console.error(err))

    navigate(`/progress/${id}`);
  }

  return (
    <>
      <Typography style={{ marginLeft: "1rem", marginTop: "1rem" }} variant="h4">Participants</Typography>
      <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
        <ol>
          {/* for each event write it here */}
        </ol>
      </div>
      <TextField label="Server Address" required onChange={(e) => {setServerAddress(e.target.value)}}/>
      <Button onClick={startServer}>Start Server</Button>
    </>
  )
}

export default ManageRequest;