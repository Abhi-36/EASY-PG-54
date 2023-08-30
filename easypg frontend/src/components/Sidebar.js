import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Navigation</h2>
            <ul>
                <li><a href="/">Dashboard</a></li>
                <li><a href="/search">Search PG</a></li>
                <li><a href="/listings">My Listings</a></li>
                <li><a href="/settings">Change Account Settings</a></li>
                <li><a href="/logout">Logout</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;
