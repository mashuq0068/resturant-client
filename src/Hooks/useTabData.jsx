import { useEffect, useState } from "react";
import TabItem from "../component/TabItem/TabItem";
import usePublicAxios from "./usePublicAxios";


const useTabData = (category) => {
    const axiosPublic = usePublicAxios()

    const [tabItems ,  setTabItems] = useState([])
    const [loading , setLoading] = useState(true)
    useEffect(() => {
        const tabData = async () => {
            
           try{
            setLoading(true)
            const res = await axiosPublic.get('/allMenu')
            // const data = await res.json()
            setTabItems(res?.data.filter(item => item.category === category))
           }
           catch(error){
            console.log(error)
           }
        }
        tabData()
        setLoading(false)

    },[])
    if(loading){
        return(
            <img className="fixed top-[5%] left-[10%]" src="../../bistro-boss-restaurant-resources/assets/others/cupcake.gif" alt="" />
        )
    }
    return (
        <div className=" grid grid-cols-3 gap-8">
            {tabItems?.map(item => <TabItem key={item._id} item={item}></TabItem>)}
        </div>
    );
};

export default useTabData;