import CustomBanner from "../CustomBanner/CustomBanner";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useTabData from "../../Hooks/useTabData";



const OurShop = () => {
    const drinksItem = useTabData("drinks")
    const dessertsItem = useTabData("dessert")
    const saladItem =useTabData("salad")
    const pizzaItem = useTabData("pizza")
    const soupItem = useTabData("soup")
    return (
        <div>
           <div>
           <CustomBanner subTitle={"Would you like to try a dish?"} title={"OUR SHOP"} img={'../../../bistro-boss-restaurant-resources/assets/shop/banner2.jpg'}></CustomBanner>
           </div>
           <div className=" w-[80vw] mx-auto">
    <Tabs className=''>
    <TabList className='w-max mx-auto font-medium uppercase md:text-xl  -mt-[7%] '>
      <Tab>Salad</Tab>
      <Tab>pizza</Tab>
      <Tab>soups</Tab>
      <Tab>desserts</Tab>
      <Tab>drinks</Tab>
     
    </TabList>

    <TabPanel className="mt-[10vh]">
      <div>
        {saladItem}
      </div>
    </TabPanel>
    <TabPanel>
    <div>
        {pizzaItem}
    </div>
    </TabPanel>
    <TabPanel>
     <div>
        {soupItem}
     </div>
    </TabPanel>
    <TabPanel>
      <div>
        {dessertsItem}
      </div>
    </TabPanel>
    <TabPanel>
      <div>
        {drinksItem}
      </div>
    </TabPanel>
    
  </Tabs>
           </div>
        </div>
    );
};

export default OurShop;