

import { useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";


const PaymentHistory = () => {
    const [data , setData] = useState()
    const {user} = useContext(AuthContext)

    const axiosSecure  = useAxios()
    useEffect(() => {
        axiosSecure.get(`/payments/${user?.email}`)
        .then(res => {
            console.log(res.data)
            setData(res.data)
        }) 
    },[])
if(data){
    return (
        <div>
          <div className=" flex justify-center w-[75vw] items-center">
         {/* main div */}
          <div className=""> 
         {/* section */}
            <div className="2xl:-mt-[12%] md:-mt-[20%]">
            <SectionTitle title={"PAYMENT HISTORY"} subTitle={"---At a Glance!---"}></SectionTitle>
            </div>
             
             {/* heading */}
            <div className=" font-cinzel w-[50vw] font-bold items-center flex justify-between">
           
             <h3 className=" 2xl:text-3xl md:text-2xl text-xl ">Total payments : {data?.length}</h3>
             
            
            </div>
            {/* table */}
            <div className="overflow-x-auto mt-[5%]">
   <table className="table 2xl:text-lg text-base">
     {/* head */}
    <thead className=" bg-[#D1A054] ">
   
    
         <tr className="2xl:text-lg font-semibold  text-white text-base">
           <td></td>
             <td className=" text-center">Email</td>
          
             <td className=" text-center">Total Price</td>
             <td className=" text-center">Transaction id</td>
             <td className=" text-center">Payment Date</td>
           
         </tr>
      
     
  
     </thead>
       {/* row 1 */}
       <tbody>
        {data?.map((item , i )=> 
         <tr key={item?._id} className=" text-[#737373]">
           <td>{i + 1}</td>
           <td className=" text-center">{item?.email}</td>
          
            <td className=" text-center">{item?.price}</td> 
            <td className=" text-center">{item?.transactionId}</td>
            <td className=" text-center">{item?.date}</td> 
          
         </tr>
        )}
      
       
     </tbody>
   </table>
 </div>
         </div>
        </div>
        </div>
    );
}};

export default PaymentHistory;