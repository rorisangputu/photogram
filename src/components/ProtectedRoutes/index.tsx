import * as React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

interface IProtectedRoutesProps {
}

const ProtectedRoutes: React.FunctionComponent<IProtectedRoutesProps> = (props) => {
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const location = useLocation(); //gives path that is in browser url. 

    if (loading) {
        return <div>...Loading</div>
    }
    //If user is authenticated all protected routes will be displayed
    return user ? (<Outlet/>): (
        <Navigate to="/login" state={{from: location }} /> //redirects to login from which page
    );
};

export default ProtectedRoutes;
