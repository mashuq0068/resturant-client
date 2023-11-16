
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";



const useUsersData = () => {
    const axiosSecure  = useAxios()
   
   const {isLoading , data , refetch} = useQuery({
     queryKey:['users'],
     queryFn: async () =>{
        const res = await axiosSecure.get(`/users`)
        return res.data
     }
    
    })
    if(isLoading){
        return  <img className="fixed top-[25%] left-[30%]" src="../../bistro-boss-restaurant-resources/assets/others/cupcake.gif" alt="" />
    }
   
    return {data , refetch, isLoading}
};

export default useUsersData;