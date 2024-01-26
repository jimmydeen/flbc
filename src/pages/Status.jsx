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

      for (const s in data.joiningInfo) {
        if (s.id === id) {
          console.log('line 18');
          setStatus(s);
          break;
        }
      }
      for (const r in data.requests) {
        if (r.id === id) {
          console.log('line 25');
          setStatus(prev => {prev.title = r.title; console.log(prev); return prev});
          break;
        }
      }
    }
    getStatus();
  }, [])

  return (
    <>
      {status &&
        <Typography variant="h6">{status.title}</Typography>
      }
    </>
  )
}

export default Status;