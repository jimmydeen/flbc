import React, {useState} from "react";
import { Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GetClientProgram = () => {

  const navigate = useNavigate();
  const [clientAddress, setClientAddress] = useState();
  const [clientPk, setClientPk] = useState();

  const handleClick = (number) => {

    const makeRequest = () => {
      fetch(`http://127.0.0.1:8000/download_client`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
          body: JSON.stringify({
            _client_address: clientAddress,
            _client_pk: clientPk,
          })
      })
      .then(res => res.blob())
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);

        const anchor = document.createElement('a');
        anchor.href = blobUrl;
        anchor.download = "client.py";
        anchor.style.display = "none";
        document.body.appendChild(anchor);
        anchor.click();

        anchor.remove();
        window.URL.revokeObjectURL(blobUrl);
        navigate("/progress/1294801")
      })
      .catch(err => console.error(err))
    }

    return makeRequest;
  }

  return (
    <>
      <div style={{margin: "1rem"}}>
        <TextField id="outlined-basic" required label="Address" variant="outlined" onChange={(e) => setClientAddress(e.target.value)}/>
        <TextField id="outlined-basic" required label="Private Key" variant="outlined" onChange={(e) => setClientPk(e.target.value)}/>
        <Typography> Please choose one of the following to run.</Typography>
        <Button variant="outlined" onClick={handleClick(1)}>Start Client1</Button>
        <Button variant="outlined" onClick={handleClick(2)}>Start Client2</Button>
        <Button variant="outlined" onClick={handleClick(3)}>Start Client3</Button>
      </div>
    </>
  )
}

export default GetClientProgram;