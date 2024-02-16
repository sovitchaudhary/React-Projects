import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="topnav"><a href="#">MovieSite</a></div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
        <button><a href="#">Sign In</a></button>
        <button><a href="#">Sign Up</a></button>
      </ul> 
    </div>
  );
};

export default Navbar;
