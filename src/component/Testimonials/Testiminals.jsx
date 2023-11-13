import SectionTitle from "../SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews , setReviews] = useState()
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReviews(data)
        })
    },[])
    return (
        <div className="w-[80vw] mx-auto mb-[10%]">
           <div>
           <SectionTitle title={
                "TESTIMONIALS"
            } subTitle={"---What Our Clients Say---"}></SectionTitle>
           </div>
<div>
<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map(review => <SwiperSlide className="" key={review._id}>
            <div className="w-max    mx-auto space-y-7">
            <div className=" w-max mx-auto ">
              <Rating
               style={{ maxWidth: 180 }}
               value={review.rating}
               readOnly
              
               className="custom-classname"
                />
                </div>
               <div className="">
               
               <img className=" w-[100px] mx-auto" src="https://i.postimg.cc/tRWH7429/quote-left-1.png" alt="" />
               </div>
               <div className="space-y-4 text-center w-[90vw] lg:w-[65vw] mx-auto"> 
               <p className="text-center text-[#444] ">{review.details}</p>
                <p className="text-center uppercase text-[#CD9003] 2xl:text-[32px] text-xl">{review.name}</p>
               </div>
              
            </div>
            </SwiperSlide>)}
       
      </Swiper>
</div>
        </div>
    );
};

export default Testimonials;