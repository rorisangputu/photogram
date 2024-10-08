import { createBrowserRouter } from "react-router-dom";
import Login from './Pages/login'
import Error from './Pages/error'
import Home from "./Pages/home";
import SignUp from "./Pages/signup";
import Profile from "./Pages/profile";
import MyPhotos from "./Pages/myphotos";

const router = createBrowserRouter([
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
    {
        path: '/login',
        element: <Login />,
        errorElement: <Error/>
    },
    {
        path: '/login',
        element: <SignUp />,
        errorElement: <Error/>
    },

])

export default router;