import React from 'react';
import './Header.css';
import logo from '../images/logo.jpeg'; // Import your logo image

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" className="logo" /> {/* Apply the "logo" class */}
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/search">Search</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/login">Login</a></li>   {/* Added Login */}
                    <li><a href="/register">Register</a></li>   {/* Added Register */}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
