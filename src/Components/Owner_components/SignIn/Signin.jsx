import * as React from 'react';
import './Signin.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Link } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';

const OwnerSignin = () => {
  const [message,setMessage]=useState("")
  const history = useHistory()

  const { values, handleChange, handleSubmit, handleBlur, error, touched } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (ownerSignin) => {
      ownerlogin(ownerSignin)
    }
  })


  const ownerlogin = async (ownerSignin) => {
    try {

      const response = await fetch("https://food-token-generator-backend.vercel.app/owner/login", {
        method: "POST",
        body: JSON.stringify(ownerSignin),
        headers: {
          "Content-Type": "application/json"
        }
      })

      const owner = await response.json();
      console.log(owner)

      localStorage.setItem("ownertoken" , owner.ownerToken)
     if(owner.ownerToken){
      return history.push("/ownerdash")
     }
     else{
      setMessage(owner.message)
     }


    } catch (error) {
      console.log("add owner error ", error)
    }

  }

  return (
    <div className="ownersignindiv">
      <div className="tittle">
       OWNER SIGNIN HERE :
      </div>
      <Box
      component="form"
      className='ownersigninform'
      onSubmit={handleSubmit}
    >
        <TextField
          required
          id="outlined-required"
          label="Email"
          type='email'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          name='email'
        
        />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          name='password'
        />
      <Button type='submit' variant='contained' color='success'>SIGNIN NOW</Button>
     
      <div className="messagediv" style={{color:"red"}}>{message}</div>
     
      <Link style={{cursor:"pointer"}} onClick={()=>history.push("/ownerforgotpassword")} underline="hover">
      Forgot password?
     </Link>
     

    </Box>
    </div>
  );
}


export default OwnerSignin;