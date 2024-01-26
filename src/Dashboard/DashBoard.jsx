import { NavLink, Outlet } from "react-router-dom";
import {  FaEnvelope, FaHome, FaSearch, FaShoppingBag, FaUsers} from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { MdManageAccounts, MdOutlinePayments } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { RiMailStarFill } from "react-icons/ri";
import { RiCalendarTodoFill } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
// import useAdmin from "../Hooks/useAdmin";
import { RiSecurePaymentFill } from "react-icons/ri";


const DashBoard = () => {
    // const {isAdmin , isAdminLoading} = useAdmin()
    // console.log(isAdmin)
    const isAdmin  = true
    // if(isAdminLoading){
    //   return <span className=" text-center">Loading.....</span>
    // }
   
    return (
        <div className="flex ">
      <div className=" mr-[20%]">
      <div className="fixed top-0  bg-[#D1A054] w-[20vw] min-h-screen  px-[2%] py-[3%]">
           
           <div className="z-30 mb-[23%] ">
                <h3 className=" 2xl:text-3xl text-xl md:text-2xl font-cinzel font-black">BISTRO BOSS</h3>
                <h4 className=" 2xl:text-2xl md:text-xl text-lg font-semibold  font-cinzel letter-spacing ">Restaurant</h4>
           </div>
           
          { isAdmin ? 
          <nav className="dashboard-nav md:space-y-7 space-y-3 2xl:space-y-7 font-cinzel 2xl:uppercase font-semibold mb-[10%]">
          
          
          <NavLink to='/dashboard/adminHome' className='flex  gap-[2%]'> <FaHome className="2xl:text-2xl text-xl" />Admin Home</NavLink>
         <NavLink to='/dashboard/addItems' className='flex gap-[2%]'> <ImSpoonKnife className="2xl:text-2xl text-xl" /> add items</NavLink>
         <NavLink to='/dashboard/manage' className='flex  gap-[2%]'> <MdManageAccounts className="2xl:text-2xl text-xl" />Manage</NavLink>
         <NavLink to='/dashboard/bookings' className='flex gap-[2%]'> <FaCalendarAlt  className="2xl:text-2xl text-xl" />Manage Bookings</NavLink>
         <NavLink to='/dashboard/users' className='flex gap-[2%]'> <FaUsers className="2xl:text-2xl text-xl" />All Users</NavLink>
        
       
       
         </nav> : 
          
          <nav className="dashboard-nav md:space-y-7 space-y-3 2xl:space-y-7 font-cinzel 2xl:uppercase font-semibold mb-[10%]">
          
          
            <NavLink to='/dashboard/userHome' className='flex  gap-[2%]'> <FaHome className="2xl:text-2xl text-xl" /> User Home</NavLink>
           <NavLink to='/dashboard/reservation' className='flex gap-[2%]'> <FaCalendarAlt className="2xl:text-2xl text-xl" /> Reservation</NavLink>
           <NavLink to='/dashboard/payment' className='flex  gap-[2%]'> <MdOutlinePayments className="2xl:text-2xl text-xl" /> Payment</NavLink>
           <NavLink to='/dashboard/paymentHistory' className='flex  gap-[2%]'> <RiSecurePaymentFill className="2xl:text-2xl text-xl" /> Payment History</NavLink>
           <NavLink to='/dashboard/myCart' className='flex gap-[2%]'> <BsCart4 className="2xl:text-2xl text-xl" /> My Cart</NavLink>
           <NavLink to='/dashboard/review' className='flex gap-[2%]'> <RiMailStarFill className="2xl:text-2xl text-xl" />Add Review</NavLink>
           <NavLink to='/dashboard/booking' className='flex gap-[2%]'> <RiCalendarTodoFill className="2xl:text-2xl text-xl" /> My Booking</NavLink>
         
         
           </nav>}
           <nav className="dashboard-nav md:space-y-7 space-y-3 2xl:space-y-7 font-cinzel 2xl:uppercase font-semibold">
         <hr  className="border-1  border-white"/>
          <NavLink to='/' className='flex gap-[2%]'> <FaHome className="2xl:text-2xl text-xl" />Home</NavLink>
          <NavLink to='/menu' className='flex gap-[2%]'> <FaSearch className="2xl:text-2xl text-xl" />Menu</NavLink>
          <NavLink to='/shop' className='flex gap-[2%]'> <FaShoppingBag className="2xl:text-2xl text-xl" />Shop</NavLink>
          <NavLink to='/contact' className='flex gap-[2%]'> <FaEnvelope className="2xl:text-2xl text-xl" />Contact</NavLink>
         </nav>

       </div> 
      </div>
        <div>
            <Outlet></Outlet>
        </div>
        </div>
    );
};

export default DashBoard;