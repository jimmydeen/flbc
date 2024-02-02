import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const Progress = () => {
  const [events, setEvents] = useState();

  // poll
  useEffect(() => {
    function checkServer() {
      fetch('http://localhost:5000/check_server')
        .then(response => {
            if (response.status === 200) {
                // Server has started, change the page
              return response;
            } else {
                // Server has not started, check again in 5 seconds
                setTimeout(checkServer, 5000);
            }
        });
    }
    const response = checkServer();
    response.json()
      .then(data => {
        setEvents(data.events);
      })
      .catch(err => console.error(err))

  }, [])
  return (
    <>
      {events &&
        events.map((item, index) => {
          <div style={{ border: "solid 1px black" }} key={index}>
            <Typography>{item.timestamp}</Typography>
            <Typography>{item.type}</Typography>
            <Typography>{item.message}</Typography>
            <Typography>{item.txhash}</Typography>
          </div>
        })
      }
    </>
  )
}
export default Progress;