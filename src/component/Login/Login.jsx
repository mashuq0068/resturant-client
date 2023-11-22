import { useContext, useEffect, useState } from "react";
import  { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { loadCaptchaEnginge,LoadCanvasTemplate,validateCaptcha,  } from 'react-simple-captcha';
import { AuthContext } from "../../Providers/Authprovider";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
   
    const [captcha , setCaptcha] = useState(null)
    const [error , setError] = useState(null)
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        setCaptcha(null)
        setError(null)
        console.log(data)
        const {email , password}  =data
        if (!validateCaptcha(data?.captcha)) {
         return  setCaptcha(data?.captcha?.length > 0 && "Your captcha didn't match")
        }
 
return (loginUser(email , password)

    .then(res => {
       
        console.log(res)
        navigate(location?.state ? location?.state : '/')
        
    })
    .catch(error => {
        console.error(error.message)
        setError("Your email or password may be invalid")
    })

    )
    
    }
   
// const handleSubmit = (e) => {
//     e.preventDefault()
//     const form = e.target
//     const email = form.email.value
//     const password = form.password.value
//     const captcha = form.captcha.value 
//     console.log(email , password , captcha)
//     if (!validateCaptcha(captcha)) {
//       return  toast.error("Your captcha didn't match at all.")
//     }
//     loginUser(email , password)
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         console.error(error.message)
//     })


    
// }
    useEffect(()=>{
       
            loadCaptchaEnginge(6);
     
    },[])
    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{className:"2xl:text-lg text-center"}}
                
            />
        <div className="form-bg pt-[4%]  2xl:pt-[6%]  ">
    <div className="drop-shadow-xl shadow-2xl w-[80vw] mx-auto  ">
     <div className="hero form-bg w-[80vw] h-[80vh] mb-[10%]  bg-base-200">
<div className="hero-content flex-col justify-between  lg:flex-row">
<div className="text-center lg:text-left">
 <img src="https://i.postimg.cc/L4PVd2vM/authentication2.png" alt="" />
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
    <div className="form-control">
      <label className="label">
        <span className="label-text 2xl:text-lg">Email</span>
      </label>
      <input type="email" placeholder="email" {...register("email" , {required:true} )} name="email" className="input 2xl:text-lg input-bordered"  />
      {errors.email && <span className="text-red-600">Your email is required</span>}
      <span className="text-red-600">{error}</span>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text 2xl:text-lg">Password</span>
      </label>
      <input type="password" placeholder="password" {...register("password" , {required:true} )} name="password" className="input 2xl:text-lg input-bordered"  />
      {errors.password && <span className="text-red-600">Your password is required</span>}
      <span className="text-red-600">{error}</span>

     
    </div>
    <div  className=" input input-bordered h-[5%] py-[3%]">
    <LoadCanvasTemplate />
   
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text 2xl:text-lg">Captcha</span>
      </label>
      <input type="Text" name="captcha" placeholder="Type the captcha above" className="input 2xl:text-lg input-bordered" {...register("captcha" , {required:true} )} />
      {errors.captcha && <span className="text-red-600">Captcha is required</span>}
      <span className="text-red-600">{captcha}</span>
      <label className="label">
        <a href="#" className="label-text-alt 2xl:text-base link link-hover">Forgot password?</a>
      </label>

     
    </div>
   
    <div className="form-control mt-6">
      <input type="submit" value="Login" className="btn capitalize 2xl:text-lg bg-[#D1A054] border-none hover:bg-[#a37b3eb3] btn-primary"/>
    </div>
    <div>
        <p className=" text-[#a37b3eb3] font-semibold text-center  mt-[3%]"><Link to='/signUp'>New here? Create a New Account</Link></p>
    </div>
    <div>
      <SocialLogin></SocialLogin>
    </div>
  </form>
</div>
</div>
</div>
    </div>
    </div>
    </div>
    );
};

export default Login;