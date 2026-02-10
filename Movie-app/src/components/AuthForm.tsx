import * as React from "react";
const { useState } = React;
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../CSS/Login.css";

interface AuthFormProps {
  type: "Login" | "Register";
}

function AuthForm({ type }: AuthFormProps) {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  // Flag for successful signup
  const signupSuccess = location.state?.signupSuccess;
  const from = location.state?.from?.pathname || "/";

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    // Map ID to state keys
    const key = id === "Full name" ? "fullName" : id.toLowerCase();
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError("");

    if (type === "Register") {
      // Save user to localStorage
      const users = JSON.parse(localStorage.getItem("users") || "{}");
      if (users[formData.fullName]) {
        setError("User already exists with this name.");
        return;
      }
      users[formData.fullName] = {
        email: formData.email,
        password: formData.password
      };
      localStorage.setItem("users", JSON.stringify(users));

      // Redirect to login with a 'success flag'
      navigate("/login", { state: { signupSuccess: true, from } });
    } else {
      // Login flow
      const users = JSON.parse(localStorage.getItem("users") || "{}");
      const user = users[formData.fullName];

      if (user && user.password === formData.password) {
        login();
        navigate(from, { replace: true });
      } else {
        setError("Invalid name or password.");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login">
        <h1>Welcome to {type}</h1>

        {signupSuccess && (
          <p style={{ color: 'lightgreen', marginBottom: '15px', textAlign: 'center' }}>
            Account created successfully! Please log in.
          </p>
        )}

        {error && (
          <p style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="input-fields">
          {type === "Register" && (
            <>
              <label htmlFor="Full name">Full Name</label>
              <input
                type="text"
                id="Full name"
                placeholder="Enter your full name"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                id="Email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </>
          )}
          {type === "Login" && (
            <>
              <label htmlFor="Full name">Full Name</label>
              <input
                type="text"
                id="Full name"
                placeholder="Enter your full name"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </>
          )}
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="Password"
            placeholder="Enter your password"
            required
            value={formData.password}
            onChange={handleChange}
          />

          <div className="options">
            <p><input type="checkbox" /> Remember me</p>
            <p>Forgot your password?</p>
          </div>

          <div className="button">
            <button type="submit">{type}</button>
          </div>
        </form>

        <div className="register">
          {type === "Login" ? (
            <>
              <p>Don't have an account?</p>
              <button className="register-btn">
                <NavLink to="/register" state={{ from: location.state?.from }}>Register</NavLink>
              </button>
            </>
          ) : (
            <>
              <p>Already have an account?</p>
              <button className="register-btn">
                <NavLink to="/login" state={{ from: location.state?.from }}>Login</NavLink>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
