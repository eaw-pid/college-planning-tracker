import React from 'react'
import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <nav>
            <NavLink
            to="/"
            className="nav-link"
            >
            Home    
            </NavLink>
            <NavLink
            to="/inspo"
            className="nav-link"
            >
            Inspiration   
            </NavLink>
            <NavLink
            to="/tasks"
            className="nav-link"
            >
            My Tasks    
            </NavLink>
        </nav>
    )
}

export default NavBar