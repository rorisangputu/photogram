import * as React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface IProtectedRoutesProps {
}

const ProtectedRoutes: React.FunctionComponent<IProtectedRoutesProps> = (props) => {
    const isAuth: boolean = false;
    const location = useLocation(); //gives path that is in browser url. 

    //If user is authenticated all protected routes will be displayed
    return isAuth ? (<Outlet/>): (
        <Navigate to="/login" state={{from: location }} /> //redirects to login from which page
    );
};

export default ProtectedRoutes;
