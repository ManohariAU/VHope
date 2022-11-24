import React from 'react';
import './contact.css';
import logo from './logo.png';

function ContactComponent() {
  return (
    <div className='contact'>
    <img  id="img" src={logo}/>
    <h1><center>Get in touch with us!</center></h1>
    </div>
  )
}

export default ContactComponent