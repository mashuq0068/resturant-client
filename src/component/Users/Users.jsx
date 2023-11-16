import { RiDeleteBinFill } from "react-icons/ri";
import useUsersData from "../../Hooks/useUsersData";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaUsers } from "react-icons/fa";


const Users = () => {
    const {data}= useUsersData()
    const handleDelete = () => {

    }
    
    return (
        <div>
             <div className=" flex justify-center w-[75vw] items-center">
        {/* main div */}
         <div className=""> 
        {/* section */}
           <div className="2xl:-mt-[12%] md:-mt-[20%]">
           <SectionTitle title={"MANAGE ALL USERS"} subTitle={"---How many??---"}></SectionTitle>
           </div>
            
            {/* heading */}
           <div className=" font-cinzel w-[50vw] font-bold items-center flex justify-start">
          
            <h3 className=" 2xl:text-3xl md:text-2xl text-xl ">Total Users : {data?.length}</h3>
           
           </div>
           {/* table */}
           <div className="overflow-x-auto mt-[5%]">
  <table className="table 2xl:text-lg text-base">
    {/* head */}
   <thead className=" bg-[#D1A054] ">
  
   
        <tr className="2xl:text-lg font-semibold  text-white text-base">
            <td className=" text-center"></td>
            <td className=" text-center">Name</td>
            <td className=" text-center">Email</td>
            <td className=" text-center">Role</td>
            <td className=" text-center">ACTION</td>
        </tr>
     
    
 
    </thead>
      {/* row 1 */}
      <tbody>
       {data?.map((user , i )=> 
        <tr key={user?._id}>
          <td>{i + 1}</td>
          <td className=" text-center">{user?.name}</td>
           <td className=" text-center">{user?.email}</td> 
           <td className=" text-center"><button className=" btn bg-[#D1A054] text-xl text-white hover:bg-[#D1A054]"><FaUsers></FaUsers></button></td>
           <td className=" text-center"><button onClick={()=>{handleDelete(user?._id)}} className=" btn bg-[#B91C1C] text-xl text-white hover:bg-[#8a1313]"><RiDeleteBinFill></RiDeleteBinFill></button></td>
        </tr>
       )}
     
      
    </tbody>
  </table>
</div>
        </div>
       </div>
        </div>
    );
};

export default Users;