

const CustomMenuBanner = ({img , title , subTitle}) => {
    const backgroundStyle = {
        backgroundImage: `url(${img})`,

    };
    return (
        
        <div style={backgroundStyle} className="h-[70vh] bg-no-repeat bg-cover mt-[5%] mb-[5%] flex justify-center items-center">
         <div className="p-[5%]  h-[70%] top-[40%] left-[16%] w-[60%] bg-[#15151599]  bg-blend-overlay z-20  text-white  flex flex-col justify-center items-center gap-7 ">
            <h2 className=" text-center font-cinzel uppercase   text-xl  md:text-3xl 2xl:text-4xl">{title}</h2>
            <p className="text-center font-thin text-base lg:text-base 2xl:text-lg">{subTitle}</p>
         </div>
         
        {/* <div className="">
            <img src={img} className="h-[90vh] w-full" alt="" />
        </div> */}
        </div>
    );
};

export default CustomMenuBanner;