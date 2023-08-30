import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Import Switch, Routes, Navigate
    
     import axios from 'axios';

    import Header from './components/Header';
    import Home from './pages/Home';
    import Search from './pages/Search';
    import Listing from './components/Listing';
    import Details from './components/Details';
    import Profile from './components/Profile';
    import Settings from './components/Settings';
    import Login from './pages/Login';
    import Register from './pages/Register';
    import Sidebar from './components/Sidebar';
    import Admin from './pages/Admin';
    import UserLogin from './pages/UserLogin';
    import User from './pages/User';
    import UserPage from './pages/UserPage';
    import UserDashboard from './pages/UserDashboard';
    import EditProfile from './pages/EditProfile';
    import About from './pages/About';
    import Contact from './pages/Contact'; // Import the Contact component
    import AdminLogin from './pages/AdminLogin';

    import './App.css';



    function App() {
        const [userAuthenticated, setUserAuthenticated] = useState(false);
        const [adminAuthenticated, setAdminAuthenticated] = useState(false);
        const [userId, setUserId] = useState(null); // Initialize userId state
        
        const handleUserLogin = (response) => {
            setUserAuthenticated(true);
            setUserId(response.data.id); // Set the userId based on the login response
        };

        return (
            
            <Router> 
                <div className="App">
                    <Header />
                    <div className="main-content">
                        <Sidebar />
                        <div>
                {/* <Admin /> */}
            </div>
            
            <Routes>
            <Route path="/about" element={<About />} /> {/* Add the About route */}
            <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/register" element={<Register />} />
        <Route path="admin/*" element={<Admin />} />
        <Route path="/login" element={<UserLogin setUserAuthenticated={setUserAuthenticated} />} />
        <Route
                        path="/login"
                        element={<UserLogin setUserAuthenticated={handleUserLogin} />}
                    />
                    <Route path="/user/:id" element={<UserPage id={userId} />} />
        <Route path="/user" element={<User/>} /> 
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/" element={<UserLogin setUserAuthenticated={setUserAuthenticated} />} />
                {userAuthenticated ? (
                    <Route path="/user/:userId/dashboard" element={<UserDashboard />} />
                ) : (
                    <Route path="/user/:userId/dashboard" element={<Navigate to="/" />} />
                )}
                <Route
                path={`/user/:userId/dashboard`}
                element={
                    userAuthenticated ? (
                        <UserDashboard fullName="User Full Name" />
                    ) : (
                        <Navigate to="/" />
                    )
                }
            />
            <Route path={`/user/:userId/edit-profile`} element={<EditProfile />} />
        
        
    </Routes>
    {/* <Route
                            path="/adminlogin"
                            element={<AdminLogin setAdminAuthenticated={setAdminAuthenticated} />}
                        /> */}

                    </div>
                </div>
            </Router>
            
        );
    }

    export default App;