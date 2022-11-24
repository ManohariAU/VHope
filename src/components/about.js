import React from 'react';
import needy from './needy.jpg';
import Volunteer from './Volunteer.png';
import donate from './donate.png';
import './about.css';

export default function AboutComponent() {
  return (
    <div class="about">
    <div class="img1">
    <ul>
    <li><img src={needy} width={"200px"} height={"200px"}/></li>
    <li><img src={Volunteer}/></li>
    <li><img src={donate}/></li></ul>
    </div>
    <div class="vision">
    <h3>ABOUT US</h3>
    <h4>Vhope brings people of same vision together! It acts as a common platform
    for the ones who can give physical support or financial support or both. The needy/seekers can easily access
    and avail help from the co-citizens. The volunteers on further investigation will reach out the needy</h4>
    </div>
    </div>
    
  )
}
