


const Featured = () => {
    return (
        <div className="featured-image bg-fixed 2xl:h-[830px] lg:h-[700px] mt-[10%] relative">
            <div className=" absolute linear  top-0 h-full w-full">
                {/* title */}
           <div className=" space-y-5 mt-[7%]">
           <p className="text-center text-yellow-400 italic z-20  lg:text-xl">---Check it out---</p>
             <hr className=" bg-[#E8E8E8] lg:border-2 z-20 2xl:border-2 mx-auto w-[30vw] border-[#E8E8E8]" />
            <h2 className="text-center text-xl z-20 text-white md:text-2xl xl:text-3xl 2xl:text-4xl">FROM OUR MENU</h2>
            <hr className="bg-[#E8E8E8] lg:border-2 2xl:border-2 mx-auto z-20 w-[30vw] border-[#E8E8E8]" />
           </div>
           {/* flex div */}
         
           <div className=" w-[75%] mx-auto relative">
              {/* 1st div */}
                <div className="mt-[5%] ">
                    <img className="w-[40%] drop-shadow-2xl shadow-xl" src="../../../bistro-boss-restaurant-resources/assets/home/featured.jpg" alt="" />
                </div>
                {/* 2nd div */}
                <div className="w-[38%]  text-white absolute lg:top-[10%] 2xl:top-[20%] right-[14%]">
              <h4 className="text-[24px] font-thin">
              March 20, 2023
              </h4>
               <h4 className="text-[24px] font-thin"> WHERE CAN I GET SOME?</h4>
               <p className=" font-thin">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur. 
               </p>
               <button className="px-3 py-1 rounded-md text-[20px] bg-transparent text-white capitalize hover:bg-gray-800  font-normal hover:text-white hover:border-b-[white] border-b-[white]  border-b-2">Read More</button>
                </div>
           </div>
            </div>
       
     
        </div>
    );
};

export default Featured;