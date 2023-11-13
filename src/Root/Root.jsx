import { Outlet, useLocation } from "react-router-dom";
import Footer from "../component/Footer/Footer";


const Root = () => {
    const location = useLocation()
    console.log(location)
    const noFooter = location.pathname.includes("signUp") || location.pathname.includes("login")

    return (
          <div>
           <Outlet></Outlet>
          {noFooter || <Footer></Footer>}
          </div>
        
    );
};

export default Root;