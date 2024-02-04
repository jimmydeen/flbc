import React, { useEffect } from "react";

const Summary = () => {
  const [totalIncentive, setTotalIncentive] = useState();
  const [updatesTrained, setUpdatesTrained] = useState();
  const [clientLog, setClientLog] = useState();

  useEffect(async () => {
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

    getSummary();
  }, [])

  return (
    <>
      <div style={{ marginLeft: "1rem" }}>
        <Typography variant="h4">Summary</Typography>
        <Typography variant="body1">Total Incentive: {totalIncentive}</Typography>
        <Typography variant="body1">Updates Trained: {updatesTrained}</Typography>
      </div>
      <Typography sx={{ ml: "1rem" }} variant="body1">Reward Log:</Typography>
      {
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
      <Typography variant="body1">Update Log:</Typography>
      {
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
    </>
  )
}

export default Summary;
