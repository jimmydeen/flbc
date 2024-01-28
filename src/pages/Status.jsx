import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const portForBackend = 5000
const Status = ({ needPopup }) => {
  const { id } = useParams();
  console.log(id);
  const [status, setStatus] = useState(null);

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
          setStatus(prev => {prev.joinDetails = joinItem.title; return prev});
          break;
        }
      }
    }
    getStatus();
  }, [])

  return (
    <>
      {status &&
        <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
          <Typography variant="h6">{status.title}</Typography>
          <Typography variant="body1">Description: {status.description}</Typography>
          <Typography variant="body1">Format: {status.format}</Typography>
          <Typography variant="body1">Incentive: {status.incentiveAmount}</Typography>
          <Typography variant="body1">Rounds: {status.rounds}</Typography>
          <Typography variant="body1">Model Type: {status.modelType}</Typography>
        </div>
      }
    </>
  )
}

export default Status;