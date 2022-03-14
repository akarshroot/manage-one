import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const GuardedRoute = () => {
    const auth = true; // determine if authorized
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default GuardedRoute;