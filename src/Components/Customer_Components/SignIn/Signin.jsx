import * as React from 'react';
import './Signin.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';

const Signin = () => {
  return (
    <div className="signindiv">
      <div className="tittle">
       CUSTOMER SIGNIN HERE :
      </div>
      <Box
      component="form"
      className='signinform'
 
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
      <div className="links">
        <Link href="#" underline="hover">
      Forgot password?
     </Link>
     <Link href="#" underline="hover">
        Don't have an acoount? Signup
     </Link>
      </div>

    </Box>
    </div>
  );
}


export default Signin;