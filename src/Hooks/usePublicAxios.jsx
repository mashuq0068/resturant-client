import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://resturant-server-self.vercel.app'
})


const usePublicAxios = () => {
    return (
        axiosPublic
    );
};

export default usePublicAxios;