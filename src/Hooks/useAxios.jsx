import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Providers/Authprovider";
import { useNavigate } from "react-router-dom";

 const axiosSecure = axios.create({
    baseURL:'http://localhost:5000'
 })
const useAxios = () => {
    const { logOutUser}  = useContext(AuthContext)
    const navigate = useNavigate()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token')
        console.log("it is intercepting")
        config.headers.authorization = `Bearer ${token}`;
        return config;
      }, function (error) {
        console.log(error)
       
        return Promise.reject(error);
      });
    
    
    axiosSecure.interceptors.response.use(function (response) {
        
        return response;
      }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logOutUser();
            // navigate('/login')
        }
        return Promise.reject(error);
    
        
    })
    return axiosSecure;
    
}
        
      


export default useAxios;