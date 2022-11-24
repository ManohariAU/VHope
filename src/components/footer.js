import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Link} from 'react-router-dom'
import './footer.css';
function FooterComponent() {
  return (
    <div className='footer'>Contact Us<br></br><br></br>
    <ul>
    <li><span className='email'><EmailIcon/><Link to="#">Email: vhope@gmail.com</Link></span></li>
    <li><span className='phone'><PhoneIcon/>Support: 9025998765</span></li>
    <li><span className='loca'><LocationOnIcon/>Location: Avadi,Chennai</span></li>
    <li><span className='face'><FacebookIcon/><Link to="#">Follow us</Link></span></li>
    <li><span className='twi'><TwitterIcon/><Link to="#">Folllow us</Link></span></li></ul>
    
    
    </div>
  )
}

export default FooterComponent