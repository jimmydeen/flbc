import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const portForBackend = 5000
const ManageRequest = ({ needPopup }) => {
  const { id } = useParams();
  console.log(id);
  const [status, setStatus] = useState(null);

  const [isPoppedUp, setIsPoppedUp] = useState(true);

  useEffect(() => {
    const getStatus = async () => {
      const response = await fetch(`http://127.0.0.1:${portForBackend}`);
      const data = await response.json();

      for (const r in data.requests) {
        const requestItem = data.requests[r];
        if (requestItem.id == id) {
          console.log("found request item");
          console.log(requestItem);
          setStatus(requestItem);
          break;
        }
      }
      for (const s in data.joiningInfo) {
        const joinItem = data.joiningInfo[s];
        if (joinItem.id == id) {
          console.log("found join item");
          console.log(joinItem);
          setStatus(prev => {prev.joinDetails = joinItem; return prev});
          break;
        }
      }
    }
    getStatus();
  }, [])

  const handleConnect = () => {
    setIsPoppedUp(true);
    return;
  }

  const handlePopupClose = () => {
    setIsPoppedUp(false);
  }

  return (
    <>
      {status &&
        <>
          <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
            <Typography variant="h6">{status.title}</Typography>
            <Typography variant="body1">Current Round: {status.rounds}</Typography>
            <Typography variant="body1">Participants: {status.participants}</Typography>
            <Button variant="outlined" onClick={handleConnect}>Start Server</Button>
          </div>
          <Dialog
            open={isPoppedUp}
            onClose={handlePopupClose}
          >
            <DialogContent>
              <DialogTitle>Server Info</DialogTitle>
              <Typography variant="body1">{status.joinDetails.server.description}</Typography>

              <Typography variant="h6">Blockchain Info</Typography>
              <Typography variant="body1">{status.joinDetails.blockchain.description}</Typography>
              <Button variant="outlined">Download Client</Button>
            </DialogContent>
          </Dialog>
        </>
      }
    </>
  )
}

export default ManageRequest;