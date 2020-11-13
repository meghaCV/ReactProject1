import React, { useState } from "react";
import logo from "../../assets/image.png";
import { Link } from "react-router-dom";

export default function Header() {
    return ( 
      <header className="App">
         <h1>Goodluck Package Tracking Site </h1>
         <img src={logo} className="App-logo" alt="logo" />
         <ul className="nav-links">
           <li><a href="/">Home</a></li>
        </ul>
        
      </header>
      );
  } 
    