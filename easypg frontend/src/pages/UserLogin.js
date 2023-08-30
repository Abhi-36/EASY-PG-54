import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function UserLogin({ setUserAuthenticated }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Reset previous errors
            setErrors({});

            // Basic form validation
            if (!formData.email || !formData.password) {
                setErrors({ message: 'Please fill in all fields' });
                return;
            }

            const response = await axios.post('http://localhost:8080/HomePage/signinUser', {
                email: formData.email,
                password: formData.password
            });

            console.log('Response:', response.data); // Log the entire response data
            console.log('UserID:', response.data.id); // Log the extracted user ID

            if (response.data.id) {
                setUserAuthenticated(true);
                const userId = response.data.id;

                // Redirect to the user dashboard
                navigate(`/user/${userId}/dashboard`);
            } else {
                setErrors({ message: 'Invalid user credentials in authentication' });
            }

        } catch (error) {
            console.error('Error logging in:', error.response);
            setErrors({ message: 'Invalid user credentials in catch' });
        }
    };

    return (
        <div className="login">
            <h1>User Login</h1>
            {errors.message && <div className="error">{errors.message}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default UserLogin;
