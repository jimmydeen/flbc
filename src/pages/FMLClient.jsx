import { React, useEffect, useState } from "react";
import { Button, Box, FormControl, TextField, FormHelperText, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const FMLClient = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [format, setFormat] = useState();
  const [rounds, setRounds] = useState();
  const [modelType, setModelType] = useState();

  const [validInput, setValidInput] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    // direct to deploy page
    if (!validInput) {
      alert("Please fill in the form before submitting."); // error modal popup with animation would be a good exercise
    } else {
      // store fields in local storage
      localStorage.setItem('title', title);
      localStorage.setItem('description', description);
      localStorage.setItem('format', format);
      localStorage.setItem('rounds', rounds);
      localStorage.setItem('modelType', modelType);
      navigate('/deploy');
    }
  }

  useEffect(() => {
    if (!title || !description || !format || !rounds || !modelType) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }, [title, description, format, rounds, modelType])

  return (
    <>
      <Typography variant="h6" sx={{ mt: 1, ml: 1, p: 3/4}}>Submit a request:</Typography>
      <Box component='form' className='JoinForm' sx={{
      width: 3/4,
      padding: '10px',
      '& .MuiTextField-root': { m: 1, width: '50ch' },
      '& button': { m: 1, display: 'block', marginLeft: 'auto', marginRight: 'auto' },
      }}>
      <FormControl>
          <TextField required label="Title" variant="outlined" onChange={(e) => setTitle(e.target.value)}/>
          <TextField required multiline rows={3} maxRows={5} type="Description" label="description" variant="outlined" onChange={(e) => setDescription(e.target.value)}/>
          <TextField required label="Format" variant="outlined" onChange={(e) => setFormat(e.target.value)}/>
          <TextField required label="Rounds" variant="outlined" onChange={(e) => setRounds(e.target.value)}/>
          <TextField required label="Model Type" variant="outlined" onChange={(e) => setModelType(e.target.value)}/>
          
          {/* use for error alerts */}
          {!validInput && 
          <FormHelperText>
              Please fill in the form.
          </FormHelperText>
          }

          {/* submit form */}
          <Button variant='contained' disableElevation color='primary' onClick={handleClick}>Submit</Button>
      </FormControl>
      </Box>
    </>
  )
}
export default FMLClient;