

const SectionTitle = ({title , subTitle}) => {
    return (
        <div className="mt-36 mb-12 space-y-5">
             <p className="text-center text-yellow-400 italic  lg:text-xl">{subTitle}</p>
             <hr className=" bg-[#E8E8E8] lg:border-2 2xl:border-2 mx-auto w-[30vw] border-[#E8E8E8]" />
            <h2 className="text-center text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">{title}</h2>
            <hr className="bg-[#E8E8E8] lg:border-2 2xl:border-2 mx-auto w-[30vw] border-[#E8E8E8]" />
           
        </div>
    );
};

export default SectionTitle;