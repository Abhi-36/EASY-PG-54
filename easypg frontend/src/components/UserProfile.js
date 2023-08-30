import React from 'react';

function UserProfile({ userData }) {
    return (
        <div>
            <h1>User Profile</h1>
            <p>Email: {userData.email}</p>
            <p>Name: {userData.fullName}</p>
            <p>Mobile Number: {userData.mobNo}</p>
            <p>Gender: {userData.gender}</p>
            {/* Display other user data fields */}
        </div>
    );
}

export default UserProfile;
