import React, { useState } from 'react';
import './Settings.css';
import axios from 'axios';

function Settings() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: '',
        mobNo: 0,
        address: '',
        gender: 'MALE',
        role: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Updated settings:', formData);

        try {
            // Send formData to the backend for updating user settings
            const response = await axios.post('http://localhost:8080/users/edit', formData);

            console.log('Response:', response); // Log the entire response

            if (response.status === 200) {
                console.log('Settings updated successfully:', response.data);
                alert('Settings updated successfully!');
            } else {
                console.log('Settings update failed:', response.data);
                alert('Settings update failed: ' + response.data);
            }
        } catch (error) {
            console.error('Error updating settings:', error);

            // Maybe show the user a message about the error
            if (error.response) {
                alert('Settings update failed: ' + error.response.data);
            } else {
                alert('Settings update failed!');
            }
        }
    };

    return (
        <div className="settings-container">
            <h2>Account Settings</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                {/* Add more fields here */}
                <button type="submit">Update Settings</button>
            </form>
        </div>
    );
}

export default Settings;
