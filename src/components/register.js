import  * as React from 'react';
import {TextField,Button} from '@mui/material';
import {Link} from 'react-router-dom'
import './register.css';

function RegistrationComponent() {
  return (
    <div className='top'>
    <div className='Register'>
    <h2>Hi! Do me a favor... Smile :)</h2>
    <form action='http://localhost:3000/land'>
    <label>UserName:</label><br></br>
    <TextField id="filled-basic" label="User Name" type="text" variant="filled" required/><br></br><br></br>
    <label>Email:</label><br></br>
    <TextField id="filled-basic" label="Email" type="email" variant="filled" required /><br></br><br></br>
    <label>Password:</label><br></br>
    <TextField id="filled-basic" label="Password" type="password" variant="filled" required /><br></br><br></br>
    <label>Confirm Password:</label><br></br>
    <TextField id="filled-basic" label="Confirm Password" type="password" variant="filled" required /><br></br><br></br>
    <label>Mobile Number:</label><br></br>
    <TextField id="filled-basic" label="Mobile Number" type="number" variant="filled" required /><br></br><br></br>
    <label>Date of Birth:</label><br></br>
    <TextField id="filled-basic" label="" type="date" variant="filled" required /><br></br><br></br>
    <p>By Clicking on create account you agree to Vhope's <b>User Agreement</b>,<b>Privacy Policy</b> and <b>Cookies Settings</b></p>
     <Button variant='contained' color='success' type='submit' id='Button'>CREATE ACCOUNT</Button><br></br>
      <h5><span>or</span></h5><br></br>
      <p>Already in Vhope?<Link to="/sign">SignIn</Link></p>
      
     </form> 
    </div></div>
  )
}
export default RegistrationComponent;
