

const SectionTitle = ({title , subTitle}) => {
    return (
        <div className=" space-y-5">
            <h2 className="text-center text-yellow-300 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">{title}</h2>
            <p className="text-center lg:text-xl">{subTitle}</p>
        </div>
    );
};

export default SectionTitle;