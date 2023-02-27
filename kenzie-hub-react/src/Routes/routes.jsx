import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';


const RoutesP = () => {
    const getToken = localStorage.getItem("@LOGINUSER");
    return (
        <>
            {getToken ? <Outlet /> : <Navigate to="/"/>}

        </>
    );
};

export default RoutesP;




