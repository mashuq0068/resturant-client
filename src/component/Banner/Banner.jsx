
import Navbar from '../Navbar/Navbar';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
      <>
      <div className=" relative h-[90vh] mb-[15%] text-white">
         <div className="absolute h-[70vh] w-full top-0">
         <div className="absolute  h-[12vh] w-full bg-[#15151580]  bg-blend-overlay z-20  text-white  top-0">
</div>
         <Navbar></Navbar>
         </div>

     <div className='flex justify-center h-[80vh] items-center'>
     <Carousel 
     autoPlay={true}
     infiniteLoop
     showArrows={true}
     showStatus={false}
    
     
    
     interval={3000}
        >
    
     <div>
     <img className="" src="https://i.postimg.cc/D0V5J9Wb/01.jpg" alt="" />
    
     </div>
    <div>
    <img className="" src="https://i.postimg.cc/bYQ9VFD3/02.jpg" alt="" />
    
    </div>
    <div>
    <img className="" src="https://i.postimg.cc/BbGcQ2yT/03.png" alt="" />
    </div>
     <div>
     <img className="" src="https://i.postimg.cc/RhQ13N5j/04.jpg" alt="" />
     </div>
     <div>
     <img className="" src="https://i.postimg.cc/pdqvRB6j/05.png" alt="" />
     </div>
  <div>
  <img className="" src="https://i.postimg.cc/qvGq6yFJ/06.png" alt="" />
  </div>
     </Carousel>
     </div>
      
      </div>
     
      </>

  );
};

export default Banner;
