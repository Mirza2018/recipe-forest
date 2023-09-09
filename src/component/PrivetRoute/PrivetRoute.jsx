import React, { useContext } from 'react';
import { AuthContext } from '../../provider/Authprovider';
import { NavLink, Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <div>loading...</div>
    }


    if (user) {
        return children;
    }
    else {
        return <Navigate state={{ from: location }} to='/login' replace></Navigate>
    }

};

export default PrivetRoute;