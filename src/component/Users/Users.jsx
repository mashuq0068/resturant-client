import { RiDeleteBinFill } from "react-icons/ri";
import useUsersData from "../../Hooks/useUsersData";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FaUsers } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";



const Users = () => {
    const {data}= useUsersData()
    const axiosSecure = useAxios()
    const {refetch} = useUsersData()
   
    
    const handleDelete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "you want delete the user",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          
          axiosSecure.delete(`/user/${id}`)
          .then(res => {
           
            console.log(res.data)
            refetch()
          })
          Swal.fire(
            'Deleted!',
            'Your item has been deleted.',
            'success'
          )
        }
      })
     


    }

    const handleUpdateRole = (id , name)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: `you want to consider ${name} as a admin`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, make admin!'
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/user/admin/${id}`)
          .then(res => {
           
            console.log(res.data)
            
            if(res.data.modifiedCount){
            
              refetch()
              Swal.fire(
                'Success full!',
                `${name} is an admin now`,
                'success'
              )
            }
         
          })
          
        }
      })
     
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
          {user?.role === "admin" ? 
          <td className=" text-center"><p>Admin</p></td>
           : 
          <td className=" text-center"><button onClick={()=>{handleUpdateRole(user?._id, user?.name)}}className=" btn bg-[#D1A054] text-xl text-white hover:bg-[#D1A054]"><FaUsers></FaUsers></button></td>}
           <td className=" text-center"><button onClick={()=>{handleDelete(user?._id  )}} className=" btn bg-[#B91C1C] text-xl text-white hover:bg-[#8a1313]"><RiDeleteBinFill></RiDeleteBinFill></button></td>
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