import React from 'react';
import './Details.css';

function Details() {
    // Mock data for demonstration
    const pgDetails = {
        name: "Ocean View PG",
        location: "Beach Road",
        type: "Double Room",
        price: "$500",
        description: "A spacious double room with a scenic beach view. Amenities include Wi-Fi, laundry service, and 24/7 security."
    };

    return (
        <div className="details-container">
            <h2>{pgDetails.name}</h2>
            <p><strong>Location:</strong> {pgDetails.location}</p>
            <p><strong>Type:</strong> {pgDetails.type}</p>
            <p><strong>Price:</strong> {pgDetails.price}</p>
            <p><strong>Description:</strong> {pgDetails.description}</p>
        </div>
    );
}

export default Details;
