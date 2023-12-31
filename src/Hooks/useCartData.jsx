import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";


const useCartData = () => {
    const axiosSecure  = useAxios()
    const {user} = useContext(AuthContext)
   const {isLoading , data , refetch} = useQuery({
     queryKey:['carts'],
     queryFn: async () =>{
        const res = await axiosSecure.get(`/carts?email=${user?.email}`)
        return res.data
     }
    
    })
    if(isLoading){
        return  <img className="fixed top-[25%] left-[30%]" src="../../bistro-boss-restaurant-resources/assets/others/cupcake.gif" alt="" />
    }
   
    return {data , refetch, isLoading}
};


export default useCartData;