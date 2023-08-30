// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Login.css';

// function UserLogin({ setUserAuthenticated }) {
//     const navigate = useNavigate();

//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/HomePage/signinUser', {
//                 email: formData.email,
//                 password: formData.password
//             });

//             if (response.data.token) {
//                 setUserAuthenticated(true);
//                 navigate('/user'); // This will navigate to the user dashboard.
//             } else {
//                 console.log('Invalid user credentials in login else');
//             }
//         } catch (error) {
//             console.error('Error logging in:', error.response);
//             console.log('Invalid user credentials in login catch');
//         }
//     };

//     return (
//         <div className="login">
//             <h1>User Login</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={formData.password}
//                     onChange={handleChange}
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// }

// export default UserLogin;
