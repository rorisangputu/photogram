import { createBrowserRouter } from "react-router-dom";
import Login from './Pages/login'
import Error from './Pages/error'
import Home from "./Pages/home";
import SignUp from "./Pages/signup";
import Profile from "./Pages/profile";
import MyPhotos from "./Pages/myphotos";
import ProtectedRoutes from "./components/ProtectedRoutes";

const router = createBrowserRouter([
    {
        element: <ProtectedRoutes />,
        children:[
            {
                path: '/',
                element: <Home />,
                errorElement: <Error/>
            },
            {
                path: '/profile',
                element: <Profile/>,
                errorElement: <Error/>
            },
            {
                path: '/myphotos',
                element: <MyPhotos />,
                errorElement: <Error/>
            },
        ],
    },
    
    {
        path: '/login',
        element: <Login />,
        errorElement: <Error/>
    },
    {
        path: '/signup',
        element: <SignUp />,
        errorElement: <Error/>
    },

])

export default router;