import React, { useEffect, useState } from "react";
import {Button, FormControl, FormHelperText, Box, TextField} from "@mui/material";

const Deploy = () => {
  const [contractPath, setContractPath] = useState();
  const [w3provider, setW3Provider] = useState();
  const [chainId, setChainId] = useState();
  const [senderAddress, setSenderAddress] = useState();
  const [incentive, setIncentive] = useState();
  const [numberUpdatesRequested, setNumberUpdatesRequested] = useState();
  const [stake, setStake] = useState();
  const [privateKey, setPrivateKey] = useState();
  const [maxDataPoints, setMaxDataPoints] = useState();

  const [validInput, setValidInput] = useState(true);

  const submit = () => {
    fetch("http://127.0.0.1:5000/deploy_contract", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
        body: JSON.stringify({
          contract_path: contractPath,
          w3provider,
          chain_id: chainId,
          sender_address: senderAddress,
          private_key: privateKey,
          incentive,
          numberUpdatesRequested,
          maxDataPoints,
          stake
        })
    })
  }

  useEffect(() => {
    if (!contractPath || !w3provider || !senderAddress || !incentive || !numberUpdatesRequested || !stake || !privateKey || !maxDataPoints) {
      console.log('not filled yet');
      setValidInput(false);
    } else {
      setValidInput(true);
    }
  }, [contractPath, w3provider, chainId, senderAddress, incentive, numberUpdatesRequested, stake, privateKey, maxDataPoints])

  return (
    <Box component='form' className='JoinForm' sx={{
    width: 3/4,
    padding: '10px',
    '& .MuiTextField-root': { m: 1, width: '50ch' },
    '& button': { m: 1, display: 'block', marginLeft: 'auto', marginRight: 'auto' },
    }}>
    <FormControl>
        <TextField id="outlined-basic" required label="Contract Path" variant="outlined" onChange={(e) => setContractPath(e.target.value)}/>
        <TextField id="outlined-basic" required label="W3 Provider" variant="outlined" onChange={(e) => setW3Provider(e.target.value)}/>
        <TextField id="outlined-basic" required label="Chain Id" variant="outlined" onChange={(e) => setChainId(e.target.value)}/>
        <TextField id="outlined-basic" required label="Sender Address" variant="outlined" onChange={(e) => setSenderAddress(e.target.value)}/>
        <TextField id="outlined-basic" required label="Incentive" variant="outlined" onChange={(e) => setIncentive(e.target.value)}/>
        <TextField id="outlined-basic" required label="Number Updates Requested" variant="outlined" onChange={(e) => setNumberUpdatesRequested(e.target.value)}/>
        <TextField id="outlined-basic" required label="Stake" variant="outlined" onChange={(e) => setStake(e.target.value)}/>
        <TextField id="outlined-basic" required label="Private Key" variant="outlined" onChange={(e) => setPrivateKey(e.target.value)}/>
        <TextField id="outlined-basic" required label="Max Data Points" variant="outlined" onChange={(e) => setMaxDataPoints(e.target.value)}/>
        
        {/* use for error alerts */}
        {!validInput && 
        <FormHelperText>
            Please fill in the form.
        </FormHelperText>
        }

        {/* submit form */}
        <Button variant='contained' disableElevation color='primary' onClick={submit}>Submit</Button>
    </FormControl>
    </Box>
  )
}
export default Deploy;