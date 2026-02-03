import { NavLink } from "react-router-dom";
import "../CSS/Login.css";
function Login() {
    return (
        <>
            <div className="login">
                <h1>Welcome to Login</h1>
                <div className="input-fields">
                    <label htmlFor="Full name">Full Name</label>
                    <input
                        type="text"
                        id="Full name"
                        placeholder="Enter your full name"
                    />
                    <label htmlFor="Password">Password</label>
                    <input
                        type="password"
                        id="Password"
                        placeholder="Enter your password"
                    />
                    <div className="options">
                        <p>
                            <input type="checkbox" />Remember me</p>
                        <p>Forgot your password?</p>
                    </div>
                </div>
                <div className="button">
                    <button>Login</button>
                </div>
                <div className="register">
                    don't have an account? <button className="register-btn"><NavLink to="/register">Register</NavLink></button>
                </div>
            </div>
        </>
    );
}

export default Login;
