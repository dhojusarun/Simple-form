import * as React from "react";
const { useState } = React;
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";

function ForgotPassword() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [resetCode, setResetCode] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const users = JSON.parse(localStorage.getItem("users") || "{}");
        const user = users[fullName];

        if (user && user.email === email) {
            // Simulate sending a reset code
            const code = Math.floor(100000 + Math.random() * 900000).toString();
            setResetCode(code);
            // In a real app, this would be sent via email
        } else {
            setError("User not found or email does not match.");
        }
    };

    return (
        <div className="login-page">
            <div className="login">
                <h1>Forgot Password</h1>

                {error && (
                    <p style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>
                        {error}
                    </p>
                )}

                {resetCode ? (
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        <p style={{ marginBottom: '15px', color: 'lightgreen' }}>
                            Reset code generated successfully!
                        </p>
                        <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0' }}>
                            {resetCode}
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            Please use this code to reset your password.
                        </p>
                        <div className="button">
                            <button onClick={() => navigate("/reset-password", { state: { fullName } })}>
                                Go to Reset Password
                            </button>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="input-fields">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Enter your full name"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="button">
                            <button type="submit">Verify User</button>
                        </div>
                    </form>
                )}

                <div className="register" style={{ marginTop: '20px' }}>
                    <button className="register-btn" onClick={() => navigate("/login")}>
                        Back to Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
