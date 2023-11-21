import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";
import useCartData from "../../Hooks/useCartData";
import SectionTitle from "../SectionTitle/SectionTitle";
import { RiDeleteBinFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


const MyCart = () => {
  
   const {data , refetch , isLoading}  = useCartData()
   console.log(useCartData())
   const navigate = useNavigate()
   
    
  const handlePay = () => {
        if(data?.length === 0){
          Swal.fire({
            title: "No Item?",
            text: "You can't pay without adding anything",
            icon: "question",
            confirmButtonColor:'#D1A054'
            
          });
          return
        }
        return navigate('/dashboard/payment')
  }
    
    const axiosSecure = useAxios()
    const handleDelete = (id) => {
      Swal.fire({
        title: 'Are you sure?',
        text: "you want delete it from cart",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#D1A054',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/carts/${id}`)
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
    
   
 if(isLoading){
  return(
    <p className=" fixed left-[40%] top-[40%]">loading.....</p>
  )
 }
    
    return (
       <div className=" flex justify-center w-[75vw] items-center">
        {/* main div */}
         <div className=""> 
        {/* section */}
           <div className="2xl:-mt-[12%] md:-mt-[20%]">
           <SectionTitle title={"WANNA ADD MORE?"} subTitle={"---My Cart---"}></SectionTitle>
           </div>
            
            {/* heading */}
           <div className=" font-cinzel w-[50vw] font-bold items-center flex justify-between">
          
            <h3 className=" 2xl:text-3xl md:text-2xl text-xl ">Total Orders : {data?.length}</h3>
            <h3 className=" 2xl:text-3xl md:text-2xl text-xl mr-[5%]">Total Price : ${data?.reduce((total , item) => total + item?.price , 0)}</h3>
            <button onClick={handlePay} className=" btn 2xl:text-xl hover:bg-[#D1A054] bg-[#D1A054] text-white">
                PAY
            </button>
           
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
           <td><button onClick={()=>{handleDelete(item?._id)}} className=" btn bg-[#B91C1C] text-xl text-white hover:bg-[#8a1313]"><RiDeleteBinFill></RiDeleteBinFill></button></td>
        </tr>
       )}
     
      
    </tbody>
  </table>
</div>
        </div>
       </div>
    )}

export default MyCart;
