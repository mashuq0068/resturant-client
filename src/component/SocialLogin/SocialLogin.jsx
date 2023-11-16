import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/Authprovider";
import usePublicAxios from "../../Hooks/usePublicAxios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext)
    const axiosPublic = usePublicAxios()
    const navigate = useNavigate()
    const location = useLocation()
    
    const handleGoogle = () => {
        signInWithGoogle()
        .then(res => {
            console.log(res)
            const userInfo = {
                email :res.user?.email,
                name:res.user?.displayName
            }
            axiosPublic.post(`/users?email=${res.user?.email}`, userInfo)
            .then(res => {
              console.log(res.data)
              if(res.data.insertedId){
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'You signed in successfully',
                  showConfirmButton: false,
                  timer: 1500
                })
                navigate(location?.state ? location.state : '/')
              }
            })
        })
        .catch((error) => {
            console.error(error.message)
        })

    }
    return (
        <div className=" flex justify-center items-center">
          <button onClick={handleGoogle} className=" btn bg-[#D1A054] hover:bg-[#D1A054] 2xl:text-lg w-[85%] mx-auto capitalize text-white">
            <FaGoogle></FaGoogle>
         continue with google
            </button>  
        </div>
    );
};

export default SocialLogin;