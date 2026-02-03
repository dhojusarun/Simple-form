import { NavLink } from "react-router-dom"
import "./Footer.css"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
function Footer() {
    return (
        <>
            <div className="footer">
                <h3>Quick Links</h3>
                <div className="footer-quicklinks">
                    <div className="social-media">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                    <div className="quicklinks">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/trendingmovies">Trending Movies</NavLink>
                        <NavLink to="/popularmovies">Popular Movies</NavLink>
                        <NavLink to="/newmovies">New Movies</NavLink>
                    </div>
                    <div className="footer-text">
                        <h1>Get New Movies and Updates</h1>
                        <input type="text" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <p>&copy; 2024 Movie App. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
