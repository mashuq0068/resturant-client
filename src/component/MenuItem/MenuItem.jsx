

const MenuItem = ({item}) => {
    return (
        <div className="flex gap-5 drop-shadow-xl shadow-xl rounded-4xl px-[3%] py-[2%]">
            <div>
                <img className="w-[118px] drop-shadow-xl shadow-xl"  src={item.image} alt="" />
            </div>
            <div className=" uppercase space-y-3">
              <h3 className=" text-[#151515] font-cinzel text-[20px]">{item.name}-------</h3>
              <p className=" text-base font-light lowercase text-[#737373]">{item.recipe}</p>
            </div>
            <div>
             <p className=" text-[#BB8506] text-[20px]">${item.price}</p>
            </div>
        </div>
    );
};

export default MenuItem;