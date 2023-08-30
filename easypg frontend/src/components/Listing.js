import React from 'react';
import './Listing.css';

function Listing() {
    // Mock data for now
    const listings = [
        { id: 1, name: "John's PG", location: "City Center", type: "Single Room", price: "$300" },
        { id: 2, name: "Ocean View PG", location: "Beach Road", type: "Double Room", price: "$500" },
        // ... add more sample listings
    ];

    return (
        <div className="listing-container">
            <h2>Available Listings</h2>
            <ul>
                {listings.map(listing => (
                    <li key={listing.id}>
                        <h3>{listing.name}</h3>
                        <p>Location: {listing.location}</p>
                        <p>Type: {listing.type}</p>
                        <p>Price: {listing.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Listing;
