import React, { useState } from 'react';

import {NavStyle} from "../styles";

const NavBar = (props) => {
  
  return (
    <div>
      <NavStyle>
        <div id="navbar">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </div>
      </NavStyle>
    
    </div>
  );
}

export default NavBar;