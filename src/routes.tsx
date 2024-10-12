import { createBrowserRouter } from "react-router-dom";
import Login from './pages/login'
import Error from './pages/error'
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import MyPhotos from "./pages/myphotos";
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