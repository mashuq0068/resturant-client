import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import useCartData from "../../Hooks/useCartData";


const TabItem = ({item}) => {
  const {user} = useContext(AuthContext)
  const [,refetch ] = useCartData()
  const axiosSecure = useAxios()
  const {_id , image , recipe , name, price} = item
  const handelAddToCart = () => {
    const oneCart = {
      menuId : _id,
      email : user?.email,
      image,
      name,
      price


    }
    axiosSecure.post('/carts', oneCart)
    .then(res =>{
      console.log(res.data)
      if (res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "The food added to the cart",
          showConfirmButton: false,
          timer: 1500
        });
        refetch()
       
  }})

      }
      


    
    return (
        <div className=" relative">
<div className="card  bg-base-100 shadow-xl">
  <figure className="">
    <img src={image} alt="Shoes" className="rounded-xl w-full" />
  </figure>
  <div className="card-body items-center text-center space-y-3">
    <h2 className="card-title 2xl:text-2xl lg:text-xl font-bold">{name}</h2>
    <p className="text-[#737373]  text-left">{recipe.slice(0, 72)}</p>
    <p className=" bg-black px-[2%] py-[1%] text-white absolute top-[3%] right-[4%]">${price}</p>
    <div className="card-actions">
      <button onClick={handelAddToCart} className="uppercase btn  bg-gray-2Z00 border-b-2 hover:bg-gray-900 border-b-[#BB8506] text-lg text-[#BB8506] ">add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default TabItem;