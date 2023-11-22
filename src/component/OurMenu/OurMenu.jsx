import useMenuData from "../../Hooks/UseMenuData";
import CustomBanner from "../CustomBanner/CustomBanner";
import CustomMenuBanner from "../CustomMenuBanner/CustomMenuBanner";
import SectionTitle from "../SectionTitle/SectionTitle";



const OurMenu = () => {
    const offeredItem = useMenuData("offered")
    const dessertsItem = useMenuData("dessert")
    const saladItem = useMenuData("salad")
    const pizzaItem = useMenuData("pizza")
    const soupItem = useMenuData("soup")
   
    return (
        <>
        <div >
          <CustomBanner subTitle={"Would you like to try a dish?"} title={"OUR MENU"} img={"https://i.postimg.cc/pTB4vVcL/banner3.jpg"}></CustomBanner>
        </div>
        <div className="">
            <SectionTitle subTitle={"---Don't miss---"} title={"TODAY'S OFFER"}></SectionTitle>
            {offeredItem}
        </div>
        <div>
            <CustomMenuBanner  img={'https://i.postimg.cc/fy2P32N4/dessert-bg.jpg'} title={"DESSERTS"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></CustomMenuBanner>
            <div>
                {dessertsItem}
            </div>
        </div>
        <div>
            <CustomMenuBanner img={'https://i.postimg.cc/h4p63j7C/pizza-bg.jpg'} title={"PIZZA"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></CustomMenuBanner>
            <div>
                {pizzaItem}
            </div>
        </div>
        <div>
            <CustomMenuBanner img={'https://i.postimg.cc/qMqSfTsp/salad-bg.jpg'} title={"salads"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></CustomMenuBanner>
            <div>
                {saladItem}
            </div>
        </div>
        <div>
            <CustomMenuBanner img={'https://i.postimg.cc/4N0MsSPV/soup-bg.jpg'} title={"Soup"} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></CustomMenuBanner>
            <div>
                {soupItem}
            </div>
        </div>
        </>
    );
};

export default OurMenu;