const Heading = ({title, subTitle}: {title: string, subTitle: string}) => {
    return (
        <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-black">{title}</h2>
            <p className="text-xl mt-4 text-gray-500">{subTitle}</p>
        </div>
    );
};

export default Heading;