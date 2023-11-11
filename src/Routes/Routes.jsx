import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "../Pages/HomePage/HomePage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import OurMenuPage from "../Pages/OurMenuPage/OurMenuPage";
import OurShopPage from "../Pages/OurShopPage/OurShopPage";


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
              element:<OurMenuPage></OurMenuPage>
            },
            {
                path:'/shop',
                element:<OurShopPage></OurShopPage>
            }
        ]
    }
])
export default router
