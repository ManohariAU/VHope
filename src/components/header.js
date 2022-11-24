import React,{useState} from 'react';
import { AppBar,Toolbar,Tabs,Tab,Typography,Button} from '@mui/material';
import logo from './logo.png';
import {Link} from 'react-router-dom';
import './header.css';
function HeaderComponent() {
  const [count, setCount] = useState();
  return (
    <React.Fragment>
    <AppBar sx={{background: '#000000'}}>
    <Toolbar>
    <img src={logo} className='logo'/>
    <Typography sx={{padding:'10px',fontSize: '20px',fontWeight: 'bold'}}>
    VHOPE</Typography>
    <Tabs sx={{marginLeft:'auto'}} indicatorColor={'primary'} value={count} onChange={(e,count) => setCount(count)} textColor= 'inherit¯'>
    <Link to="/"><Tab label="Home" sx={{color:'white',textDecoration:'none'}}/></Link>
    <Link to="/about"><Tab label="About Us" sx={{color:'white',textDecoration:'none'}}/></Link>
    <Link to="/contact"><Tab label="Contact Us" sx={{color:'white',textDecoration:'none',}} /></Link>
    </Tabs>
    <Link to="/register"><Button  sx={{marginLeft: 'auto',color: 'white',textDecoration:'none'}} variant="container">Signup</Button></Link>
   <Link to="/sign"><Button sx={{marginLeft: '10px',color: 'white',textDecoration:'none'}} variant="container">Login</Button></Link>
    </Toolbar>
    </AppBar>
    </React.Fragment>
  )
}

export default HeaderComponent