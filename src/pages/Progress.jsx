import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Progress = () => {
  const [events, setEvents] = useState();

  const navigate = useNavigate();

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:8000/get_events');
      if (response.status === 201) {
        navigate("/summary/1294801");
      } else if (response.status === 200) {
        const result = await response.json();
        setEvents(result);
      } 
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
            <div style={{ border: "solid 1px black", padding: "1rem", margin: "1rem" }} key={index}>
              <Typography>{`[${item.timestamp}] ${item.type}`}</Typography>
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