import React from "react"
import { Typography } from "@mui/material";

const WaitingDeployment = () => {
  // useEffect(() => {
  //   while (true) {
  //     // fetch from the endpoint which gives indication that the server has been started
  //   }
  // 
    // function checkServer() {
    //   fetch('http://localhost:5000/check_server')
    //       .then(response => {
    //           if (response.status === 200) {
    //               // Server has started, change the page
    //               window.location.href = '/new_page';
    //           } else {
    //               // Server has not started, check again in 5 seconds
    //               setTimeout(checkServer, 5000);
    //           }
    //       });
    // }
  // }, [])

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
        <Typography>Waiting for the contract to deploy.</Typography>
        <div class="lds-circle"><div></div></div>
      </div>
    </div>
  )
}

export default WaitingDeployment;