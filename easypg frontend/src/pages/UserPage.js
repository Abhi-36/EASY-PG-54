import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserPage.css';

function UserPage() {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        console.log('UserPage id:', id);

        if (id) {
            console.log('Fetching user data for id:', id);
            fetchUserData(id);
        }
    }, [id]);

    const fetchUserData = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:8080/users/${userId}`);
            if (response.status === 200) {
                console.log('Received user data:', response.data);
                setUserData(response.data);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    if (!id) {
        console.log('No id provided');
        return <div>No user selected</div>;
    }

    return (
        <div className="user-profile">
            {userData ? (
                <div>
                    <h1>User Profile</h1>
                    <p>Email: {userData.email}</p>
                    <p>Name: {userData.fullName}</p>
                    <p>Mobile No: {userData.mobNo}</p>
                    <p>Gender: {userData.gender}</p>
                    <p>Role: {userData.role}</p>
                    {/* Render other user data */}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default UserPage;
