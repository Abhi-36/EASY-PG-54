import React from 'react';
import { useNavigate, Outlet, Routes, Route, useLocation } from 'react-router-dom';
import AddAdmin from './AddAdmin';
import UserList from './UserList';
import PropertyList from './PropertyList';
import './Admin.css';

function Admin() {
    const navigate = useNavigate();
    const location = useLocation();

    const isAdminRoot = location.pathname === '/admin'; // Adjust this if your base path is different

    return (
        <div className="admin">
            <h1>Admin Dashboard</h1>

            {isAdminRoot && (
                <>
                    <button onClick={() => navigate('addadmin')}>Add Admin User</button>
                    <button onClick={() => navigate('user-list')}>User List</button>
                    <button onClick={() => navigate('property-list')}>Property List</button>
                </>
            )}

            {/* Nested Routes */}
            <Routes>
                <Route path="addadmin" element={<AddAdmin />} />
                <Route path="user-list" element={<UserList />} />
                <Route path="property-list" element={<PropertyList />} />
            </Routes>

            {/* Placeholder for the selected nested route */}
            <Outlet />
        </div>
    );
}

export default Admin;
