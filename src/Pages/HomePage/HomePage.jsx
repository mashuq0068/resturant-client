import Advertisement from "../../component/Advertisement/Advertisement";
import Banner from "../../component/Banner/Banner";
import Category from "../../component/Category/Category";
import Featured from "../../component/Featured/Featured";
import Menu from "../../component/Menu/Menu";
import Testimonials from "../../component/Testimonials/Testiminals";



const HomePage = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Category></Category>
            <Advertisement></Advertisement>
            <Menu></Menu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
}; 

export default HomePage;