const Heading = ({title, subTitle}: {title: string, subTitle: string}) => {
    return (
        <div className="text-center ">
            <h2 className="text-3xl md:text-5xl font-semibold">{title}</h2>
            <p className="opacity-80 text-xl mt-4">{subTitle}</p>
        </div>
    );
};

export default Heading;