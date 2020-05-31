import React, { useState } from 'react';
import { Navbar,NavbarBrand} from "reactstrap"

import {NavStyle} from "../styles";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  
  return (
    <div>
      <NavStyle>
        <div id="navbar">
         <NavbarBrand href="/">
          <Link to="/"><img src={`${process.env.PUBLIC_URL}/assets/AD_Logo.png`}></img></Link>
          </NavbarBrand>
        </div>
      </NavStyle>
    
    </div>
  );
}

export default NavBar;