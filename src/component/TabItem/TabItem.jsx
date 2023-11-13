

const TabItem = ({item}) => {
    return (
        <div>
<div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={item?.image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center space-y-3">
    <h2 className="card-title 2xl:text-2xl lg:text-xl font-bold">{item?.name}</h2>
    <p className="text-[#737373]  text-left">{item?.recipe.slice(0, 72)}</p>
    <div className="card-actions">
      <button className="uppercase btn  bg-gray-2Z00 border-b-2 hover:bg-gray-900 border-b-[#BB8506] text-lg text-[#BB8506] ">add to cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default TabItem;