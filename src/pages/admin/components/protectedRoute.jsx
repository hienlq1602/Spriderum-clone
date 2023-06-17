import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoute = () => {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    return (
        <div>
            {
            
                (token) ? <Outlet /> : navigate('/admin')
            }
        </div>
    );
};

export default ProtectedRoute;