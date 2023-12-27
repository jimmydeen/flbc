import './App.css';
import { useState } from 'react';
import { Box, Button, FormControl, FormHelperText } from "@mui/material";
import { TextField } from "@mui/material";

function App() {
  const [bcNetwork, setBcNetwork] = useState();
  const [chainId, setChainId] = useState();
  const [address, setAddress] = useState();
  const [privKey, setPrivKey] = useState();

  const [validInput, setValidInput] = useState(true);

  const handleClick = () => {
    if (bcNetwork && chainId && address && privKey) {
      // for now it makes an alert, but when integrating here is where you'll use the api
      alert(bcNetwork + chainId + address + privKey)
      setValidInput(true)
    } else {
      setValidInput(false);
    }
  }

  return (
    <div className="App">
      <header className='AppHeader'><h1>FLBC</h1></header>
      <Box component='form' className='JoinForm' sx={{
        width: 3/4,
        padding: '10px',
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        '& button': { m: 1, display: 'block', marginLeft: 'auto', marginRight: 'auto' },
      }}>
        <FormControl>
          <TextField id="outlined-basic" required label="Blockchain Network" variant="outlined" onChange={(e) => setBcNetwork(e.target.value)}/>
          <TextField id="outlined-basic" required type="number" label="Chain Id" variant="outlined" onChange={(e) => setChainId(e.target.value)}/>
          <TextField id="outlined-basic" required label="Blockchain Address" variant="outlined" onChange={(e) => setAddress(e.target.value)}/>
          <TextField id="outlined-basic" required label="Private Key" type="password" variant="outlined" onChange={(e) => setPrivKey(e.target.value)}/>
          
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
    </div>
  );
}

export default App;
