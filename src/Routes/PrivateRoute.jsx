import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/Authprovider";


const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const location = useLocation()
   
           
    if(user){
      return children
    }
    else if (loading){
    return  <img className="absolute top-[40%] left-[50%]" src="../../bistro-boss-restaurant-resources/assets/others/cupcake.gif" alt="" />
    }

    return <Navigate state={location?.pathname} to='/login'></Navigate>
    
};

       
   


export default PrivateRoute;