import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";


const useCartData = () => {
    const axiosSecure  = useAxios()
    const {user} = useContext(AuthContext)
   const {isPending , error , data , refetch} = useQuery({
     queryKey:['carts'],
     queryFn: async () =>{
        const res = await axiosSecure.get(`/carts?email=${user?.email}`)
        return res.data
     }
    
    })
    if(isPending){
        return  <img className="fixed top-[25%] left-[30%]" src="../../bistro-boss-restaurant-resources/assets/others/cupcake.gif" alt="" />
    }
    if(error){
        return error
    }
    return [data , refetch]
};


export default useCartData;