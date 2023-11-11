import { useEffect, useState } from "react";
import TabItem from "../component/TabItem/TabItem";


const useTabData = (category) => {
    const [tabItems ,  setTabItems] = useState([])
    useEffect(() => {
        const tabData = async () => {
           try{
            const res = await fetch('menu.json')
            const data = await res.json()
            setTabItems(data.filter(item => item.category === category))
           }
           catch(error){
            console.log(error)
           }
        }
        tabData()

    },[])
    return (
        <div className=" grid grid-cols-3 gap-5">
            {tabItems?.map(item => <TabItem key={item._id} item={item}></TabItem>)}
        </div>
    );
};

export default useTabData;