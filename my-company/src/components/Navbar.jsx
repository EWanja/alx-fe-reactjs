import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div style={{display:"flex", justifyContent:"space-around", padding:"10px", backgroundColor:"#9e2323ff"}}>
            <Link to ="/" style={{color:"#fff", textDecoration:"none"}}> Home </Link> 
            <Link to="/about" style={{color:"#fff", textDecoration:"none"}}> About </Link> 
            <Link to="/services" style={{color:"#fff", textDecoration:"none"}}> Services </Link> 
            <Link to ="/contact" style={{color:"#fff", textDecoration:"none"}}> Contact </Link> 
        </div>
    )
}

export default Navbar