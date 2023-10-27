import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () =>{
return(
<>
<nav className="navbar">
<div className="logo"><img src="/logo.webp" alt="logo"/></div>
<ul className="navlist">
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/emotion">Emotion</NavLink></li>
<li><NavLink to="/drama">Drama</NavLink></li>
<li><NavLink to="/video">Video</NavLink></li>
</ul>
    </nav>
</>
)
}
export default Navbar;
