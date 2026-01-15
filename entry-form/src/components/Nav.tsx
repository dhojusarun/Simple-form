import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        Form
      </NavLink>
      <NavLink to="/counter" className={({ isActive }) => isActive ? "active" : ""}>
        Counter
      </NavLink>
      <NavLink to="/todo" className={({ isActive }) => isActive ? "active" : ""}>
        Todo
      </NavLink>
    </nav>
  );
};

export default Nav;
