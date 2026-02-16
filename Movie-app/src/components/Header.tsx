import React from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import Search from "./input fields/Search";
import { useAuth } from "../context/AuthContext";

function Header() {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Movie Mania</h1>
        <Search />
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/trendingmovies">Trending Movies</NavLink>
          <NavLink to="/popularmovies">Popular Movies</NavLink>
          <NavLink to="/upcomingmovies">Upcoming Movies</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </div>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="login-btn">Logout</button>
        ) : (
          <NavLink to="/login" className="login-btn">Login</NavLink>
        )}
      </nav>
    </>
  );
}

export default Header;
