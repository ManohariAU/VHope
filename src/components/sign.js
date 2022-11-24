import React from 'react';
import {Button,TextField,Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from 'react-router-dom';
import './sign.css';

function Sign() {
  return (
    <div className='top'>
    <div className='sign'>
    <h2>Welcome!</h2>
    <form action='http://localhost:3000/land'>
    <label>UserName/E-mail</label><br></br>
    <TextField id="filled-basic" label="Email" type="email" variant="filled" required/><br></br><br></br>
    <label>Password</label><br></br>
    <TextField id="filled-basic" label="Password" type="password" variant="filled" required/><br></br>
    <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
    </FormGroup>
    <Button variant='contained' color='success' type='submit' id="Button">SIGN IN</Button>
    
    <p>Don't have an account? <Link to="/register">Create account</Link></p>
    </form></div></div>
  )
}

export default Sign;