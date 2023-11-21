import { useState } from "react";
import { useEffect } from "react";
import useAxios from "./useAxios";

const useChartData = (category) => {
    const [loading , setLoading] = useState(true)
    const [chartData , setChartData] = useState(null)
    const axiosSecure = useAxios()
    useEffect(() => {
        const chart = async () => {
            
           try{
            setLoading(true)
            const res = await axiosSecure.get('/allMenu')
            // const data = await res.json()
           setChartData(res?.data.filter(item => item.category === category))
           }
           catch(error){
            console.log(error)
           }
        }
        chart()
         setLoading(false)

    },[])
    
    return chartData?.length
};

export default useChartData;