import React from 'react'
import { useUser } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { isSignedIn, isLoaded } = useUser();
    const location = useLocation();

    if (!isLoaded) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <h1 className='text-2xl font-semibold text-slate-300'>Loading...</h1>
            </div>
        );
    }

    if(!isSignedIn){
        return <Navigate to="/" replace state={{ from: location }} />;
    }

    return children;
}

export default ProtectedRoute