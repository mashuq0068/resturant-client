import Swal from "sweetalert2";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import usePublicAxios from "../../Hooks/usePublicAxios";
import useAxios from "../../Hooks/useAxios";
import { ImSpoonKnife } from "react-icons/im";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";


const Update = () => {
    const axiosPublic = usePublicAxios()
    const [menu  ,setMenu] = useState()
    const axiosSecure = useAxios()
    const params = useParams()
    console.log(params.id)
    
    useEffect(()=>{
        axiosPublic.get(`/menu/${params.id}`)
        .then(res => {
            console.log(res.data)
            setMenu(res.data)
        })
    },[])
    const imageHostingKey  = import.meta.env.VITE_IMGBB_API_KEY
    const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
      const onSubmit = async (data) => {
        
         const image = {image : data.image[0]}
         const res = await axiosPublic.post(imageHostingApi, image ,{
           headers:{
            'content-type' : 'multipart/form-data'
           }
         })
         if(res.data.success){
       const OneMenu = {
        name:data.recipeName,
        category: data.category,
        price: parseFloat(data.price),
        recipe:data.details,
        image:res.data.data.image
       }
       const menuResponse = await axiosSecure.patch(`/menu/${data._id}`, OneMenu)
       console.log(menuResponse.data)
       if(menuResponse.data.modifiedCount){
        reset()
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You updated the item successfully',
            showConfirmButton: false,
            timer: 1500
          })
       }
    }
      }
    return (
        <div className=' w-[75vw] mx-auto 2xl:-mt-[6%] md:-mt-[10%]'>
             <SectionTitle subTitle={"---What's new?---"} title={"ADD AN ITEM"}></SectionTitle>
             <div className=' w-[70%] mx-auto' >
                 <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="form-control">
            <label className="label">
            <span className="label-text 2xl:text-lg font-medium">Recipe name*</span>
             </label>
          <input defaultValue={menu?.name} type="text" {...register("recipeName")} placeholder="Recipe name" className="2xl:text-lg input  input-bordered"    />
         
         </div>

         <div className='grid grid-cols-2 gap-5'>
         <div className="form-control">
            <label className="label">
            <span className="label-text 2xl:text-lg  font-medium">Category*</span>
             </label>
             <select defaultValue={menu?.category} name="" id=""  {...register("category")} placeholder="Category" className="2xl:text-lg input  input-bordered"    >
                <option value=""></option>
                <option  value="soup" className="hover:bg-blue-500 hover:text-white">soup</option>
                <option  value="pizza" className="hover:bg-blue-500 hover:text-white">pizza</option>
                <option  value="desert" className="hover:bg-blue-500 hover:text-white">desert</option>
                <option value="salad" className="hover:bg-blue-500 hover:text-white">salad</option>
             </select>
            
         
         </div>
         <div className="form-control">
            <label className="label">
            <span className="label-text 2xl:text-lg  font-medium">Price*</span>
             </label>
          <input type="text" defaultValue={menu?.price} placeholder="Price" {...register("price")} className="2xl:text-lg input  input-bordered"    />
          {errors.price && <span className="text-red-600">price is required</span>}
         </div>
         </div>
         <div className="form-control">
            <label className="label">
            <span className="label-text 2xl:text-lg  font-medium">Recipe Details*</span>
             </label>
         <textarea name="" id="" defaultValue={menu?.recipe} cols="30" {...register("details")} rows="10" placeholder="Recipe Details" className="2xl:text-lg input h-[20vh]  input-bordered"></textarea>
         {errors.details && <span className="text-red-600">Details is required</span>}
         </div>
         <div className='form-control mt-[2%] mb-[2%]'>
         <input type="file" defaultValue={menu?.image} {...register("image")} className="file-input w-full max-w-xs" />
         

         </div>
         
       
        
    
         <button className='text-white flex 2xl:text-lg bg-linear  capitalize px-4 py-2  cursor-pointer btn font-normal'>   <ImSpoonKnife className=' 2xl:text-lg'></ImSpoonKnife> <span>Update Item</span></button>
          
                 </form>
             </div>
        </div>
    );
};

export default Update;