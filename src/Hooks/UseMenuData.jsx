import { useEffect, useState } from "react";
import MenuItem from "../component/MenuItem/MenuItem";
import { Link } from "react-router-dom";
import useAxios from "./useAxios";


const useMenuData = (category) => {
    const [menuItems ,  setMenuItems] = useState([])
    const axiosSecure = useAxios()
    useEffect(() => {
        const menuData = async () => {
           try{
            const res = await axiosSecure.get('/allMenu')
            // const data = await res.json()
            setMenuItems(res?.data.filter(item => item.category === category))
           }
           catch(error){
            console.log(error)
           }
        }
        menuData()

    },[])
    return (
        <div>
        <div className=" w-[80vw] mx-auto grid grid-cols-2 gap-12">
            {menuItems?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
        </div>
        <div className="text-center mt-[5%] ">
         <Link to='/shop'>  <button className="btn text-[20px] capitalize hover:bg-gray-800 hover:text-white  font-medium hover:border-b-[#1F2937] border-b-[#1F2937]   border-b-2">ORDER YOUR FAVOURITE FOOD</button></Link>
        </div>
        </div>
    );
};

export default useMenuData;