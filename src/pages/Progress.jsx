import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const Progress = () => {
  const [events, setEvents] = useState();

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:8000/get_events');
      const result = await response.json();
      console.log(result);
      setEvents(result);
    } catch (err) {
      console.error(err);
    }
  }

  // poll
  useEffect(() => {
    fetchEvents();

    const polling = setInterval(() => {
      fetchEvents()
    }, 5000);
    
    return () => clearInterval(polling);
  }, [])
  return (
    <>
      {events &&
        events.map((item, index) => {
          return (
            <div style={{ border: "solid 1px black" }} key={index}>
              <Typography>{item.timestamp}</Typography>
              <Typography>{item.type}</Typography>
              <Typography>{item.message}</Typography>
              <Typography>{item.txhash}</Typography>
            </div>
          )
        })
      }
    </>
  )
}
export default Progress;