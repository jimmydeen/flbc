import { React } from "react"
import { useLocation, Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

const JobAgreement = () => {

  const location = useLocation();

  const job = location.state;

  return (
    <div style={{ margin: "10px" }}>
      <Typography variant="h6">{job.title}</Typography>
      <Typography variant="body1">Description: {job.description}</Typography>
      <Typography variant="body1">Format: {job.format}</Typography>
      <Typography variant="body1">Incentive: {job.incentive}</Typography>
      <Typography variant="body1">Rounds: {job.rounds}</Typography>
      <Typography variant="body1">Model Type: {job.model}</Typography>
      <Link to={`/job/${job.id}`} >Join Training</Link>
    </div>
  )
}
export default JobAgreement;