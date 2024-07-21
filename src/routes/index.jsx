import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../views/home/home";
import Detail from "../views/detail/detail";
import Error404 from '../views/error404';

import Profile from "../views/profile";
import MyInfo from "../views/profile/component/MyInfo";
import LikedRecipe from "../views/profile/component/LikedRecioe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error404/>
    },
    {
        path: '/detail/:recid',
        element: <Detail/>
    },
    {
        path:'/profile',
        element:<Profile/>,
        children:[
            {
                path:'my-info',
                element:<MyInfo/>
            },
            {
                path:'liked-recipes',
                element:<LikedRecipe/>
            }
        ]
    }
]);

const MyRoute = () => <RouterProvider router={router}/>;
    


export default MyRoute;