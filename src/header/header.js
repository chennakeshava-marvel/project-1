import React from 'react'
import logo from './logo.png';
import './header.css';

const header = () => {
  return (
    <div class="main-div">
      <div class="child-div">
      <header>
      <img class="head-logo"  alt="logo"src={logo} />
      <h1 class="name" >Explore</h1>
     
     <ul>
     <li><a href="###">About</a></li>
     <li><a href="###">Contact Us</a></li>

     </ul>
      </header>
      </div>
      </div>
  )
}

export default header