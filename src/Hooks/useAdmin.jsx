// import { useQuery } from "@tanstack/react-query";
// import useAxios from "./useAxios";
// import { useContext } from "react";
// import { AuthContext } from "../Providers/Authprovider";


// const useAdmin = () => {
//     const axiosSecure = useAxios()
//     const {user} = useContext(AuthContext)
//     console.log(user)
   
//   const {data : isAdmin , isLoading } = useQuery({
//     queryKey:['Admin' , user?.email],
//     queryFn: async () =>{
//       const response  = await axiosSecure.get(`/user/admin/${user?.email}`)
//       return response.data.admin
        
//     }
    
//   })

//   if(isLoading){
//     return <span>loading</span>
//   }
  
  
//   return {isAdmin}
// };

// export default useAdmin;