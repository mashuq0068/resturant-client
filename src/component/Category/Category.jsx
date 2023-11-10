
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/hash-navigation'


import 'swiper/css';
const Category = () => {
    return (
        <div className='w-[50vw] mx-auto font-cinzel'>
            <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        zoom={true}
        pagination={{ clickable: true }} 
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
            <img src="/bistro-boss-restaurant-resources/assets/home/slide1.jpg" alt="" />
            <p className=' -mt-[30%] text-white text-center md:text-2xl text-xl 2xl:text-3xl'>Salad</p>
            </SwiperSlide>
        <SwiperSlide>
            <img src="/bistro-boss-restaurant-resources/assets/home/slide2.jpg" alt="" />
            <p className=' -mt-[30%] text-white text-center md:text-2xl text-xl 2xl:text-3xl'>Pizza</p>
            </SwiperSlide>
        <SwiperSlide>
            <img src="/bistro-boss-restaurant-resources/assets/home/slide3.jpg" alt="" />
            <p className=' -mt-[30%] text-white text-center md:text-2xl text-xl 2xl:text-3xl'>Soup</p>
            </SwiperSlide>
        <SwiperSlide>
            <img src="/bistro-boss-restaurant-resources/assets/home/slide4.jpg" alt="" />
            <p className=' -mt-[30%] text-white text-center md:text-2xl text-xl 2xl:text-3xl'>Deserts</p>
            </SwiperSlide>
        <SwiperSlide>
            <img src="/bistro-boss-restaurant-resources/assets/home/slide5.jpg" alt="" />
            <p className=' -mt-[30%] text-white text-center md:text-2xl text-xl 2xl:text-3xl'>Salad</p>
            </SwiperSlide>
        
        ...
      </Swiper>
        </div>
    );
};

export default Category;