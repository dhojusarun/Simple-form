import { NavLink } from "react-router-dom"
import "../CSS/Login.css"
function Register() {
  return (
   <>
    <div className="login">
                <h1>Welcome to Register</h1>
                <div className="input-fields">
                    <label htmlFor="Full name">Full Name</label>
                    <input
                        type="text"
                        id="Full name"
                        placeholder="Enter your full name"
                    />
                    <label htmlFor="Email">Email</label>
                    <input
                        type="email"
                        id="Email"
                        placeholder="Enter your email"
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
                    <button>Register</button>
                </div>
                <div className="register">
                    Already have an account? <button className="register-btn"><NavLink to="/login">Login</NavLink></button>
                </div>
            </div>
   </>
  )
}

export default Register
