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
import AdminHomePage from "../Pages/AdminHomePage/AdminHomePage";
import AddItemsPage from "../Pages/AddItemsPage/AddItemsPage";
import ManagePage from "../Pages/ManagePage/ManagePage";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import PaymentHistoryPage from "../Pages/PaymentHistoryPage/PaymentHistoryPage";


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
            // user
            {
            path:'userHome',
            element:<UserHomePage></UserHomePage>
            },
            {
                path:'myCart',
                element:<MyCartPage></MyCartPage>
            },
            {
               path:'payment',
               element:<PaymentPage></PaymentPage>
            },
            {
                path:'paymentHistory',
                element:<PaymentHistoryPage></PaymentHistoryPage>
            }
            ,
            // admin,
            {
                path:'users',
                element:<UsersPage></UsersPage>
            },
            {
                path:'adminHome',
                element:<AdminHomePage></AdminHomePage>
            },
            {
                path:'addItems',
                element:<AddItemsPage></AddItemsPage>
            },
            {
                path:'manage',
                element:<ManagePage></ManagePage>
            },
            {
                path:'update/:id',
                element:<UpdatePage></UpdatePage>
            }
            
    ]
    }
])
export default router
