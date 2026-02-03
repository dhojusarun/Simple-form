import "./Header.css";
import { NavLink } from "react-router-dom";
import Search from "./input fields/Search";
function Header() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Smiley</h1>
        <Search/>
        <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/trendingmovies">Trending Movies</NavLink>
            <NavLink to="/popularmovies">Popular Movies</NavLink>
            <NavLink to="/newmovies">New Movies</NavLink>
        </div>
        </nav>
    </>
  );
}

export default Header;
