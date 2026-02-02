import "./Header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">Logo</h1>
        <ul className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/trendingmovies">Trending Movies</NavLink>
            <NavLink to="/popularmovies">Popular Movies</NavLink>
            <NavLink to="/newmovies">New Movies</NavLink>
        </ul>
        </nav>
    </>
  );
}

export default Header;
