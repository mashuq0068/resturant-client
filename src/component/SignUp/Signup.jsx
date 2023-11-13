import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div>
            <div className="form-bg pt-[4%]  2xl:pt-[6%]  ">
        <div className="drop-shadow-xl shadow-2xl w-[80vw] mx-auto  ">
         <div className="hero form-bg w-[80vw] h-[80vh] mb-[10%]  bg-base-200">
  <div className="hero-content flex-col  lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <img src="../../../bistro-boss-restaurant-resources/assets/others/authentication2.png" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text 2xl:text-lg">Email</span>
          </label>
          <input type="email" placeholder="email" className="input 2xl:text-lg input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text 2xl:text-lg">Password</span>
          </label>
          <input type="password" placeholder="password" className="input 2xl:text-lg input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt 2xl:text-base link link-hover">Forgot password?</a>
          </label>
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