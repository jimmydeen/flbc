import React, { useState, useEffect } from "react";
import { Typography  } from "@mui/material";

const Summary = () => {
  const [totalIncentive, setTotalIncentive] = useState();
  const [updatesTrained, setUpdatesTrained] = useState();
  const [clientLog, setClientLog] = useState();

  const [plot, setPlot] = useState();

  useEffect(() => {
    const getSummary = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/getClientSummary")
        const data = await response.json();
        setTotalIncentive(data.total_incentive);
        setUpdatesTrained(data.updates_trained);
        setClientLog(data.client_log);
      }
      catch (err) {
        console.error(err);
      }
    }

    const getPlot = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/getPlot")
        const data = await response.blob();
        const imgUrl = URL.createObjectURL(data);
        setPlot(imgUrl);
      }
      catch (err) {
        console.error(err);
      }
    }

    getSummary();
  }, [])

  return (
    <>
      <div style={{ margin: "1rem" }}>
        <Typography variant="h4">Summary</Typography>
        <Typography variant="body1">Total Incentive: {totalIncentive}</Typography>
        <Typography variant="body1">Updates Trained: {updatesTrained}</Typography>
      </div>
      <Typography sx={{ ml: "1rem" }} variant="body1">Reward Log:</Typography>
      {clientLog &&
        clientLog.map((item, index) => {
          if (item.reward) {
            return (
              <div style={{ border: "solid 1px black", padding: "1rem", margin: "1rem" }} key={index}>
                <Typography>{`[${item.timestamp}] ${item.type}`}</Typography>
                <Typography>{item.message}</Typography>
                <Typography>{item.txhash}</Typography>
              </div>
            )
          }
        })
      }
      <Typography sx={{ml: "1rem"}} variant="body1">Update Log:</Typography>
      {clientLog &&
        clientLog.map((item, index) => {
          if (!item.reward) {
            return (
              <div style={{ border: "solid 1px black", padding: "1rem", margin: "1rem" }} key={index}>
                <Typography>{`[${item.timestamp}] ${item.type}`}</Typography>
                <Typography>{item.message}</Typography>
                <Typography>{item.txhash}</Typography>
              </div>
            )
          }
        })
      }
      {plot &&
        <>
          <Typography sx={{ml: "1rem"}} variant="body1">Plot of Models Convergence:</Typography>
          <img src={plot} alt="Plot showing the accuracy of the model over time"></img>
        </>
      }
      {}
    </>
  )
}

export default Summary;
