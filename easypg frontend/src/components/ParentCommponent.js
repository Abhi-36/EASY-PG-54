import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserDashboard from './UserDashboard'; // Import the UserDashboard component

function ParentComponent() {
    const { userId } = useParams(); // Get the userId from the URL

    // Fetch the user's data, including the fullName
    const [user, setUser] = useState({});
    
    useEffect(() => {
        // Make an API call or fetch user data here
        // For demonstration, let's assume you're fetching user data from an API
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/users/${userId}`);
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        
        fetchUserData();
    }, [userId]);

    return (
        <div>
            {/* Pass the fullName as a prop to the UserDashboard component */}
            <UserDashboard fullName={user.fullName} />
        </div>
    );
}

export default ParentComponent;
