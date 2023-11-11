import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";


const Menu = () => {
    const [menuitems , setMenuItems] = useState()
   useEffect(()=>{
    const fetchData = async () => {
        try {
          const response = await fetch('menu.json');
          const data = await response.json();
          setMenuItems(data.slice(0, 6));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
   },[])
    return (
        <div>
           <div>
           <SectionTitle subTitle={"---Check it out---"} title={"FROM OUR MENU"}></SectionTitle>
           </div>
            <div className="w-[80vw] mx-auto grid grid-cols-2 gap-12" >
            {menuitems?.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
           <div className="text-center mt-[5%] ">
           <button className="btn text-[20px] capitalize hover:bg-gray-800 hover:text-white font-thin hover:border-b-[#1F2937] border-b-[#1F2937] z-20 border-b-2"> View Full  Menu</button>
           </div>
        </div>
    );
};

export default Menu;