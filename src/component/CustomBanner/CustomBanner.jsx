import Navbar from "../Navbar/Navbar";


const CustomBanner = ({img , title , subTitle}) => {
    return (
        <div>
             <div className=" relative h-[90vh] mb-[15%] text-white">
         <div className="absolute h-[70vh] w-full top-0">
         <div className="absolute  h-[12vh] w-full bg-[#15151580]  bg-blend-overlay z-20  text-white  top-0">
         </div>
         <div className="absolute  h-[70%] top-[40%] left-[16%] w-[70%] bg-[#15151599]  bg-blend-overlay z-20  text-white uppercase font-cinzel flex flex-col justify-center items-center gap-7 ">
            <h2 className=" text-center font-semibold text-3xl  md:text-5xl 2xl:text-6xl">{title}</h2>
            <p className="text-center text-base font-medium lg:text-lg 2xl:text-xl">{subTitle}</p>
         </div>
         <Navbar></Navbar>
         </div>

     <div className='flex justify-center h-[80vh] items-center'>
      <img src={img} alt="" />
     </div>
     </div>
     </div>
      
      
     
  
       
    );
};

export default CustomBanner;