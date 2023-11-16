import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import OurMenuPage from "../Pages/OurMenuPage/OurMenuPage";
import OurShopPage from "../Pages/OurShopPage/OurShopPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Dashboard/DashBoard";

import UserHomePage from "../Pages/UserHomePage/UserHomePage";
import MyCartPage from "../Pages/MyCartPage/MyCartPage";
import UsersPage from "../Pages/UsersPage/UsersPage";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        
        children : [
            {
                path:'/',
                element:<HomePage></HomePage>
            },
            {
              path:'/menu',
              element:<PrivateRoute><OurMenuPage></OurMenuPage></PrivateRoute>
            },
            {
                path:'/shop',
                element:<PrivateRoute><OurShopPage></OurShopPage></PrivateRoute>
            },
            {
                path:'/signUp',
                element:<SignUpPage></SignUpPage>

            },
            {
                path:'/login',
                element:<LoginPage></LoginPage>
            },
            
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children : [
            {
            path:'/dashboard/userHome',
            element:<UserHomePage></UserHomePage>
            },
            {
                path:'/dashboard/myCart',
                element:<MyCartPage></MyCartPage>
            },
            {
                path:'/dashboard/users',
                element:<UsersPage></UsersPage>
            }
            
    ]
    }
])
export default router
