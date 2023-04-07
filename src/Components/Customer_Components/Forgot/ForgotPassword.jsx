import * as React from 'react';
import './Forgot.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';

const Customerforgot = () => {
  return (
    <div className="customerforgotdiv">
      <div className="tittle">
       CUSTOMER FORGOT HERE :
      </div>
      <Box
      component="form"
      className='customerforgotform'
 
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
          label="New Password"
          type="password"
          autoComplete="current-password"
        />
      <Button type='submit' variant='contained' color='success'>CHANGE PASSWORD</Button>

        <Link href="#" underline="hover">
        I remember my password
     </Link>



    </Box>
    </div>
  );
}


export default Customerforgot;