import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Logo</h1>
        <ul className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </ul>
        </nav>
    </>
  );
}

export default Header;
