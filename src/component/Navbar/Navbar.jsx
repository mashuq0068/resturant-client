import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";
import Swal from "sweetalert2";
import useCartData from "../../Hooks/useCartData";


const Navbar = () => {
    const {user , logOutUser} = useContext(AuthContext)
    const [data]= useCartData()
    console.log(data)
   
    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to logout from here",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
          }).then((result) => {
            if (result.isConfirmed) {
                logOutUser()
              Swal.fire({
                title: "Logout!",
                text: "You has been successfully logout",
                icon: "success"
              });
            }
          });
        
    }
    return (
       <div className="py-[1%]">
    
           
        <div className="flex z-20 ml-[3%] justify-between  text-white  items-center">
        <div className="z-30">
                 <h3 className=" 2xl:text-3xl text-xl md:text-2xl font-cinzel font-black">BISTRO BOSS</h3>
                 <h4 className=" 2xl:text-2xl md:text-xl text-lg font-semibold  font-cinzel letter-spacing ">Restaurant</h4>
            </div>
            <nav className="flex z-30 items-center gap-9 2xl:text-xl mr-[3%] font-semibold  lg:text-md  text-base">
               <NavLink to='/'>HOME</NavLink>
               <NavLink to='/contact' >CONTACT US</NavLink>
               <NavLink to='/dashboard' >DASHBOARD</NavLink>
               <NavLink to='/menu' >OUR MENU</NavLink>
               <div className=" flex items-center">
               <NavLink to='/shop' >OUR SHOP</NavLink>
               {/* <img className="2xl:w-[43px] lg:w-[35px] w-[32px]" src="/bistro-boss-restaurant-resources/assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png" alt="" /> */}
              </div>
              
              <NavLink to='/cart'>
              <button className=" uppercase lg:text-md  text-base 2xl:text-xl">
               Cart
             {/* <div className="badge badge-secondary text-black border-none bg-yellow-500">{data.length}</div> */}
                </button>
              </NavLink>
              {user ? <Link onClick={handleLogOut} className='uppercase'>Log Out</Link> : <NavLink className=' uppercase' to='/login'>Login</NavLink>}
              
            </nav>
            
            
          
       </div>
       
      
        </div>
      
    );
};

export default Navbar;