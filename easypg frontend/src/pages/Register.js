import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

function Signup() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        mobileNumber: '',
        gender: '',
        address: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Signup data submitted:', formData);
        
        try {
            // Send formData to the backend for user registration
            const response = await axios.post('http://localhost:8080/users/add', formData);
            
            // You can console log the response if you want
            console.log(response.data);
            
            // Clear the form or navigate the user to a different page or do anything else
            setFormData({
                fullName: '',
                email: '',
                password: '',
                mobileNumber: '',
                gender: '',
                address: ''
            });
            
            // Maybe add a notification to inform the user of successful registration
            alert('User registered successfully!');
        } catch (error) {
            console.error("There was an error registering the user!", error.response);
            
            // Maybe show the user a message about the error
            if (error.response) {
                alert('Registration failed: ' + error.response.data);
            } else {
                alert('Registration failed!');
            }
        }
    };
    
    

    return (
        <div className="signup">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                />
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
                <input
                    type="text"
                    name="mobNo"
                    placeholder="Mobile Number"
                    value={formData.mobNo}
                    onChange={handleChange}
                />
                
<div className="form-group">
    <h3>Gender</h3>
    <div className="radio-group">
        <label>
            <input
                type="radio"
                name="gender"
                value="MALE"
                checked={formData.gender === "MALE"}
                onChange={handleChange}
            />
            Male
        </label>
        <label>
            <input
                type="radio"
                name="gender"
                value="FEMALE"
                checked={formData.gender === "FEMALE"}
                onChange={handleChange}
            />
            Female
        </label>
        <label>
            <input
                type="radio"
                name="gender"
                value="OTHER"
                checked={formData.gender === "OTHER"}
                onChange={handleChange}
            />
            Other
        </label>
    </div>
</div>
<div className="form-group">
                    <h3>Role</h3>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="owner"
                                checked={formData.role === "owner"}
                                onChange={handleChange}
                            />
                            Owner
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="role"
                                value="tenant"
                                checked={formData.role === "tenant"}
                                onChange={handleChange}
                            />
                            Tenant
                        </label>
                    </div>
                </div>



                <textarea
                    name="address"
                    placeholder="Address"
                    rows="4"
                    value={formData.address}
                    onChange={handleChange}
                ></textarea>
                
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
