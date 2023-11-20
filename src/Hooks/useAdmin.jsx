import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";


const useAdmin = () => {
    const axiosSecure = useAxios()
    const {user , loading} = useContext(AuthContext)
    console.log(user)
   
  const {data : isAdmin , isPending : isAdminLoading } = useQuery({
    queryKey:['Admin' , user?.email],
    queryFn : async () =>{
      const response  = await axiosSecure.get(`/user/admin/${user?.email}`)
      console.log("res from usAdmin",response.data)
      return response.data.admin
        
    },

    enabled:!!user?.email 
    
  })

  // if(isAdminLoading || loading){
  //   return <span>loading</span>
  // }
  
  
  return {isAdmin , isAdminLoading}
};

export default useAdmin;