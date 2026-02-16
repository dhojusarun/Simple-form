import * as React from "react";
const { useCallback } = React;
import "./Header.css";
import { useNavigate, NavLink } from "react-router-dom";
import Search from "./input fields/Search";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout } from "../redux/slices/authSlice";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    navigate("/");
  }, [dispatch, navigate]);

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
          {isLoggedIn && (
            <NavLink to="/profile" className="profile-icon-link">
              <FaUserCircle />
            </NavLink>
          )}
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
