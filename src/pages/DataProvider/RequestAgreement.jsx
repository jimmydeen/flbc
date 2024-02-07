import { React, useState } from "react"
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const RequestAgreement = () => {

  // get the data from the previous page (page of requests) // may need to change this later
  const location = useLocation();
  const job = location.state;

  // navigate to waiting page
  const navigate = useNavigate();

  // contract popup
  const [contractPoppedUp, setContractPoppedUp] = useState(false);

  const showContract = () => { setContractPoppedUp(true) }

  const agree = () => {
    setContractPoppedUp(false);
    // store the request they are waiting on
    localStorage.setItem('waiting', 1294801);
    // take them to the awaiting page
    navigate('/waiting');
  }

  const disagree = () => {
    setContractPoppedUp(false);
  }

  return (
    <>
      <div style={{ margin: "10px" }}>
        <Typography variant="h6">{job.title}</Typography>
        <Typography variant="body1">Description: {job.description}</Typography>
        <Typography variant="body1">Format: {job.format}</Typography>
        <Typography variant="body1">Incentive: {job.incentive}</Typography>
        <Typography variant="body1">Rounds: {job.rounds}</Typography>
        <Typography variant="body1">Model Type: {job.model}</Typography>

        <Typography variant="body1">Number of Updates: 100</Typography>
        <Typography variant="body1">Max number of Data Points: 1000 </Typography>

        <Button variant="outlined" onClick={showContract}>Join</Button>
      </div>
      <Dialog
        open={contractPoppedUp}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you agree to the Terms and Conditions?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            In order to join, you must sign the contract. Terms and Conditions.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={disagree}>Go Back</Button>
          <Button onClick={agree} autoFocus>
            Sign
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
export default RequestAgreement;