import React from 'react';
import './Profile.css';

function Profile() {
    // Mock data for demonstration
    const userProfile = {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+123456789",
        memberSince: "January 2022"
    };

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <p><strong>Name:</strong> {userProfile.name}</p>
            <p><strong>Email:</strong> {userProfile.email}</p>
            <p><strong>Phone:</strong> {userProfile.phone}</p>
            <p><strong>Member Since:</strong> {userProfile.memberSince}</p>
        </div>
    );
}

export default Profile;
