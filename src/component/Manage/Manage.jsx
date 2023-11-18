import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";

import SectionTitle from "../SectionTitle/SectionTitle";
import { RiDeleteBinFill } from "react-icons/ri";

import { useQuery } from "@tanstack/react-query";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";


const Manage = () => {
    
    const axiosSecure = useAxios()
    const {data , refetch} = useQuery({
        queryKey:['allMenu'],
        queryFn:async () => {
           const response = await axiosSecure.get('/allMenu')
           return response.data
        }
    })
     
   
     
    
     const handleDelete = (id) => {
       Swal.fire({
         title: 'Are you sure?',
         text: "you want delete it from menu",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
       }).then((result) => {
         if (result.isConfirmed) {
           axiosSecure.delete(`/menu/${id}`)
           .then(res => {
            
             console.log(res.data)
             refetch()
           })
           Swal.fire(
             'Deleted!',
             'Your item has been deleted from menu.',
             'success'
           )
         }
       })
      
 
 
     }
     
    
  
  
 
     return (
        <div className=" flex justify-center w-[75vw] items-center">
         {/* main div */}
          <div className=""> 
         {/* section */}
            <div className="2xl:-mt-[12%] md:-mt-[20%]">
            <SectionTitle title={"MANAGE ALL ITEMS"} subTitle={"---Hurry Up!---"}></SectionTitle>
            </div>
             
             {/* heading */}
            <div className=" font-cinzel w-[50vw] font-bold items-center flex justify-between">
           
             <h3 className=" 2xl:text-3xl md:text-2xl text-xl ">Total items : {data?.length}</h3>
             
            
            </div>
            {/* table */}
            <div className="overflow-x-auto mt-[5%]">
   <table className="table 2xl:text-lg text-base">
     {/* head */}
    <thead className=" bg-[#D1A054] ">
   
    
         <tr className="2xl:text-lg font-semibold  text-white text-base">
           <td></td>
             <td>ITEM IMAGE</td>
             <td className=" text-center">ITEM NAME</td>
             <td>PRICE</td>
             <td>ACTION</td>
             <td>ACTION</td>
         </tr>
      
     
  
     </thead>
       {/* row 1 */}
       <tbody>
        {data?.map((item , i )=> 
         <tr key={item?._id}>
           <td>{i + 1}</td>
           <td className=" w-[3%]"><img className="shadow-xl shadow-black" src={item?.image} alt="" /></td>
           <td className=" text-center">{item?.name}</td>
            <td>{item?.price}</td> 
            <td><Link to={`/dashboard/update/${item?._id}`} className=" btn bg-[#D1A054] text-xl text-white hover:bg-[#8a1313]"><FiEdit /></Link></td>
            <td><button onClick={()=>{handleDelete(item?._id)}} className=" btn bg-[#B91C1C] text-xl text-white hover:bg-[#D1A054]"><RiDeleteBinFill></RiDeleteBinFill></button></td>
         </tr>
        )}
      
       
     </tbody>
   </table>
 </div>
         </div>
        </div>
     )
        };

export default Manage;