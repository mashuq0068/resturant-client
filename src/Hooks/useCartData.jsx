import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useCartData = () => {
    const axiosSecure  = useAxios()
   const {isPending , error , data:cart = [] , refetch} = useQuery({
     queryKey:['carts'],
     queryFn: async () =>{
        const res = await axiosSecure.get('/carts')
        return res.data
     }
    
    })
    if(isPending){
        return  <img className="fixed top-[25%] left-[30%]" src="../../bistro-boss-restaurant-resources/assets/others/cupcake.gif" alt="" />
    }
    if(error){
        return error
    }
    return [cart , refetch]
};


export default useCartData;