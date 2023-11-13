import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/Authprovider";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useForm } from "react-hook-form";



const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        console.log(data)
        createUser(data?.email , data?.password)
        .then(result => {
            console.log(result)
            updateProfile(auth.currentUser , {
                displayName:data?.name,
                photoURL:data?.photo

            })
            .then(()=>{
                console.log("profile updated")
            })
            .catch(error => {
                console.error(error.message)
            })
        })
        .catch(error => {
            console.log(error.message)
        })
        navigate('/login')
       
    }
    
    return (
        <div>
            <div className="form-bg pt-[4%]  2xl:pt-[6%]  ">
        <div className="drop-shadow-xl shadow-2xl w-[80vw] mx-auto  ">
         <div className="hero form-bg w-[80vw] lg:h-[110vh] 2xl:h-[90vh] mb-[10%]  bg-base-200">
  <div className="hero-content flex-col  lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <img src="../../../bistro-boss-restaurant-resources/assets/others/authentication2.png" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  onSubmit={handleSubmit(onSubmit)} className="card-body ">
      <div className="form-control">
          <label className="label">
            <span className="label-text 2xl:text-lg">User Name</span>
          </label>
          <input type="text" placeholder="User Name" {...register("name",{ required: true })} name="name" className="input 2xl:text-lg input-bordered"  />
          {errors.name && <span className="text-red-600">Your name is required</span>}
        </div>
       
      <div className="form-control">
          <label className="label">
            <span className="label-text 2xl:text-lg">Photo Url</span>
          </label>
          <input type="text" placeholder="Photo Url" {...register("photo")} name="photo" className="input 2xl:text-lg input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text 2xl:text-lg">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" {...register("email", {required:true})} className="input 2xl:text-lg input-bordered" />
          {errors.email && <span className="text-red-600">Your email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text 2xl:text-lg">Password</span>
          </label>
          <input type="password" placeholder="password" {...register("password" ,{ required: true, minLength:6, pattern:/^(?=.*[A-Z])(?=.*[!@#\$%\^&\*\(\)_\-\+=\[\]\{\};:'",.<>\/?]).*$/, })} name="password" className="input 2xl:text-lg input-bordered"  />
          {errors.password?.type === "required" && <span className=" text-red-500">Your password is required</span>}
          {errors.password?.type === "minLength" && <span className=" text-red-500">Your password must be at least 6 characters </span>}
          {errors.password?.type === "pattern" && <span className=" text-red-500">Your password must have minimum one capital letter and one special character </span>}
          <label className="label">
            <a href="#" className="label-text-alt 2xl:text-base link link-hover">Forgot password?</a>
          </label>
        </div>
        <div>
       
        </div>
        <div className="form-control mt-6">
      <input type="submit" value="Sign Up" className="btn capitalize 2xl:text-lg bg-[#b48b4cb3] border-none hover:bg-[#a37b3eb3] btn-primary"/>
    </div>
    <div>
        <p className=" text-[#a37b3eb3] font-semibold text-center mt-[3%]"> <Link to='/login'>Already registered? Go to</Link></p>
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

export default SignUp;