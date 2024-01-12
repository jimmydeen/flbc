import { React, useState } from "react";
import { Button, Box, FormControl, TextField, FormHelperText, Typography } from '@mui/material';

const User = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const [validInput, setValidInput] = useState(true);

  const handleClick = () => {
    if (title & description) {
      alert(title + description);
      setValidInput(true)
    } else {
      setValidInput(false);
    }
  }
  return (
    <>
      <Typography variant="h6" sx={{ m: 2}}>Submit a request:</Typography>
      <Box component='form' className='JoinForm' sx={{
      width: 3/4,
      padding: '10px',
      '& .MuiTextField-root': { m: 1, width: '50ch' },
      '& button': { m: 1, display: 'block', marginLeft: 'auto', marginRight: 'auto' },
      }}>
      <FormControl>
          <TextField required label="title" variant="outlined" onChange={(e) => setTitle(e.target.value)}/>
          <TextField required type="description" label="description" variant="outlined" onChange={(e) => setDescription(e.target.value)}/>
          
          {/* use for error alerts */}
          {!validInput && 
          <FormHelperText error='true' focused='false'>
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
export default User;