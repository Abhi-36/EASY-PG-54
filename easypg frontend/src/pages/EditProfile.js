import React, { useState } from 'react';
import axios from 'axios'; // Import axios or any other library for making API calls

function EditProfile({ userId }) {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Prepare the updated user data
        const updatedUserData = {
            fullName,
            email,
            mobileNumber,
            address,
        };

        try {
            // Make an API call to update the user's profile data
            const response = await axios.put(`http://localhost:8080/users/${userId}`, updatedUserData);
            
            // Handle success or show a success message
            console.log('Profile updated successfully:', response.data);
        } catch (error) {
            // Handle error or show an error message
            console.error('Error updating profile:', error);
        }
    };

    return (
        <div>
            <h1>Edit Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Full Name</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Mobile Number</label>
                    <input
                        type="text"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                </div>
                <div>
                    <label>Address</label>
                    <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditProfile;
