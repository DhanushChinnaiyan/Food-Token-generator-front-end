import * as React from 'react';
import './Signup.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';

const Signup = () => {
  return (
    <div className="signupdiv">
      <div className="tittle">
       CUSTOMER SIGNUP HERE :
      </div>
      <Box
      component="form"
      className='signupform'
 
    >
        <TextField
          required
          id="outlined-required"
          label="Name"
          type='text'

        />
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
      <Button type='submit' variant='contained' color='success'>SIGNUP NOW</Button>
      <Link href="#" underline="hover">
     Already have an account? Sign in
     </Link>
   
    </Box>
    </div>
  );
}


export default Signup;