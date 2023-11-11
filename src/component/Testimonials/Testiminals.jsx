import SectionTitle from "../SectionTitle/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';


const Testimonials = () => {
    return (
        <div>
           <div>
           <SectionTitle title={
                "TESTIMONIALS"
            } subTitle={"---What Our Clients Say---"}></SectionTitle>
           </div>
<div>
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><p className="w-max mx-auto">Slide 1</p></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
</div>
        </div>
    );
};

export default Testimonials;