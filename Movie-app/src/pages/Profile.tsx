import React from 'react';
import { useAppSelector } from '../redux/hooks';
import '../CSS/TrendingMovies.css'; // Reusing some base styles for layout

function Profile() {
    const userData = useAppSelector((state) => state.auth.userData);

    if (!userData) {
        return (
            <div className="home" style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                <h2>Please log in to view your profile.</h2>
            </div>
        );
    }

    return (
        <div className="home" style={{ minHeight: '80vh', padding: '40px', color: 'white' }}>
            <h1 style={{ marginBottom: '30px', textAlign: 'center' }}>Your Profile</h1>

            <div style={{
                maxWidth: '600px',
                margin: '0 auto',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '30px',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ color: '#9ca3af', display: 'block', marginBottom: '5px' }}>Full Name</label>
                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{userData.fullName}</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ color: '#9ca3af', display: 'block', marginBottom: '5px' }}>Email Address</label>
                    <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{userData.email}</p>
                </div>

                <div style={{ marginTop: '30px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px' }}>
                    <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
                        Account Status: <span style={{ color: 'lightgreen' }}>Active</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
