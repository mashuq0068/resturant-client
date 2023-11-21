import { GiWallet } from "react-icons/gi"
import { FaUsers } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { ImTruck } from "react-icons/im";
import { useEffect, useState } from "react";
import useAxios from '../../Hooks/useAxios'
import Chart from "../Chart/Chart";

const AdminHome = () => {
    const [counts , setCounts] = useState(null)
    const axiosSecure = useAxios()
    // const {customers , products , orders , revenue} = counts

    
    useEffect(()=>{
   axiosSecure.get('/adminCount')
   .then(res => {
    console.log(res.data)
    setCounts(res.data)
   })
    },[])
    if(counts){
    return (
        <div className="w-[75vw] ">
            <h1 className=" font-cinzel ml-5  2xl:ml-8 font-semibold mt-12 md:text-3xl text-2xl  ">Hi, Welcome Back!</h1>
            {/* stats */}
            <div className="flex gap-7 flex-wrap mt-[2%] ml-[3%]">
                {/* first */}
                <div className="bg-gradient-to-r from-[#BB34F5] py-[3%] px-[5%] to-[#FCDBFF] flex  gap-5 items-center">
                <div>
                <GiWallet className="text-5xl text-white" />
                </div>
                <div className="md:text-3xl text-2xl text-white font-bold">
                    <p>${counts?.revenue + 7000}</p>
                    <p className="text-2xl font-medium mt-2">Revenue</p>
                </div>
                </div>
                {/* second */}
                <div className="bg-gradient-to-r from-[#D3A256] py-[3%] px-[5%] to-[#FDE8C0] flex gap-5 items-center">
                <div>
                <FaUsers className="text-5xl text-white" />
                </div>
                <div className="md:text-3xl text-2xl text-white font-bold">
                    <p>{counts?.customers + 100}</p>
                    <p className="text-2xl font-medium mt-2">Customers</p>
                </div>
                </div>
                {/* first */}
                <div className="bg-gradient-to-r from-[#FE4880] py-[3%] px-[5%] to-[#FECDE9] flex gap-5 items-center">
                <div>
                <FaShoppingBag className="text-5xl text-white" />
                </div>
                <div className="md:text-3xl text-2xl text-white font-bold">
                    <p>{counts?.products + 100}</p>
                    <p className="text-2xl mt-2 font-medium">Products</p>
                </div>
                </div>
                {/* first */}
                <div className="bg-gradient-to-r from-[#6AAEFF] py-[3%] px-[5%] to-[#B6F7FF] flex gap-5 items-center">
                <div>
                <ImTruck className="text-5xl text-white" />
                </div>
                <div className="md:text-3xl text-2xl text-white font-bold">
                    <p>{counts?.orders + 100}</p>
                    <p className="text-2xl font-medium mt-2">Orders</p>
                </div>
                </div>
                
               
            </div>
            <Chart></Chart>
        </div>
    );
}};

export default AdminHome;