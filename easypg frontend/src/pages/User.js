import React from 'react';


function UserPage({ user }) {
    return (
        <div className="user-page">
            <h2>Welcome, {user.fullName}!</h2>
            <div className="user-info">
                <p>Email: {user.email}</p>
                <p>Mobile Number: {user.mobNo}</p>
                <p>Address: {user.address}</p>
                <p>Gender: {user.gender}</p>
                <p>Role: {user.role}</p>
            </div>
        </div>
    );
}

export default UserPage;
