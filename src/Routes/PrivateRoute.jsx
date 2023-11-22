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
    return  <img className="fixed top-[20%] left-[40%]" src="https://i.ibb.co/t8KGwG0/cupcake.gif" alt="" />
    }

    return <Navigate state={location?.pathname} to='/login'></Navigate>
    
};

       
   


export default PrivateRoute;