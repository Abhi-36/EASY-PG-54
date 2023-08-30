import React from 'react';
import './Search.css';

function Search() {
    return (
        <div className="search-container">
            <h2>Search PG Accommodations</h2>
            <form>
                <input type="text" placeholder="Location" />
                <input type="number" placeholder="Budget" />
                <select>
                    <option>Single Room</option>
                    <option>Double Room</option>
                    <option>Triple Room</option>
                </select>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default Search;
