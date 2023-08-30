import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-content">
            <h1>Welcome to EASY-PG</h1>
            <p>Your one-stop solution for finding the best PG accommodations in town!</p>
            <div className="features">
                <div className="feature-card">
                    <h2>Search PG</h2>
                    <p>Find PG accommodations that fit your criteria, whether it's budget, location, or amenities.</p>
                </div>
                <div className="feature-card">
                    <h2>List Your PG</h2>
                    <p>Have a PG accommodation to offer? List it here and get noticed by potential tenants.</p>
                </div>
                <div className="feature-card">
                    <h2>Contact & Support</h2>
                    <p>Got questions or need help? Reach out to our support team for assistance.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
