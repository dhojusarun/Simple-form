import * as React from "react";
const { useState } = React;
import { useNavigate, useLocation } from "react-router-dom";
import "../CSS/Login.css";

function ResetPassword() {
    const location = useLocation();
    const navigate = useNavigate();
    const [fullName, setFullName] = useState(location.state?.fullName || "");
    const [resetCode, setResetCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Simple validation: check if code is 6 digits (mock validation)
        if (resetCode.length !== 6) {
            setError("Invalid reset code. It should be 6 digits.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "{}");
        if (!users[fullName]) {
            setError("User not found.");
            return;
        }

        // Update password
        users[fullName].password = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        setSuccess(true);

        setTimeout(() => {
            navigate("/login");
        }, 2000);
    };

    return (
        <div className="login-page">
            <div className="login">
                <h1>Reset Password</h1>

                {error && (
                    <p style={{ color: 'red', marginBottom: '15px', textAlign: 'center' }}>
                        {error}
                    </p>
                )}

                {success ? (
                    <div style={{ textAlign: 'center', color: 'lightgreen' }}>
                        <p style={{ fontSize: '18px' }}>Password reset successful!</p>
                        <p style={{ color: 'white', marginTop: '10px' }}>Redirecting to login...</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="input-fields">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Confirm your full name"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <label htmlFor="resetCode">Reset Code</label>
                        <input
                            type="text"
                            id="resetCode"
                            placeholder="Enter 6-digit code"
                            required
                            value={resetCode}
                            onChange={(e) => setResetCode(e.target.value)}
                        />
                        <label htmlFor="newPassword">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            placeholder="Enter new password"
                            required
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <div className="button">
                            <button type="submit">Reset Password</button>
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

export default ResetPassword;
