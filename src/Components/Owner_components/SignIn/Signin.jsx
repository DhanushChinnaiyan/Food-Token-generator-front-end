import * as React from 'react';
import './Signin.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';

const OwnerSignin = () => {
  return (
    <div className="ownersignindiv">
      <div className="tittle">
       OWNER SIGNIN HERE :
      </div>
      <Box
      component="form"
      className='ownersigninform'
 
    >
        <TextField
          required
          id="outlined-required"
          label="Email"
          type='email'
        
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      <Button type='submit' variant='contained' color='success'>SIGNIN NOW</Button>
      <Link href="#" underline="hover">
      Forgot password?
     </Link>
     

    </Box>
    </div>
  );
}


export default OwnerSignin;