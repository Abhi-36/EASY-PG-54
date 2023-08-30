import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function UserDashboard() {
    const { userId } = useParams(); // Get the userId from the URL

    // Add state for user's full name
    const [fullName, setFullName] = useState('');

    // Fetch user data and set full name
    useEffect(() => {
        // Fetch user data using userId and update the full name
        // For demonstration, let's assume you're fetching the full name from an API
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/users/${userId}`);
                const userData = await response.json();
                setFullName(userData.fullName);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [userId]);

    return (
        <div>
            <h1>User Dashboard</h1>
            <p>Welcome to your dashboard, {fullName}!</p>
            <p>
                <Link to={`/user/${userId}/edit-profile`}>Edit Profile</Link>
            </p>
            {/* Add more dashboard content here */}
        </div>
    );
}

export default UserDashboard;
