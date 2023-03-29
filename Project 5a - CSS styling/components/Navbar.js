/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img className="navlogo" src="../images/react-icon-small.png" alt="React Icon" />
            <h1 className="navheading">ReactFacts</h1>
            <h2 className="navproject">React Course - Project 1</h2> 
        </nav>
    )
}