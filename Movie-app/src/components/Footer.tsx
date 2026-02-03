import { NavLink } from "react-router-dom"
import "./Footer.css"
function Footer() {
    return (
        <>
            <div className="footer">
                <h3>Quick Links</h3>
                <div className="quicklinks">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/trendingmovies">Trending Movies</NavLink>
                    <NavLink to="/popularmovies">Popular Movies</NavLink>
                    <NavLink to="/newmovies">New Movies</NavLink>
                </div>
                <p>&copy; 2024 Movie App. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
