import Card from "../shared/Card";

const TrendingApps = () => {
    return (
        <div className="bg-gray-100 py-20">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center ">
                    <h2 className="text-3xl md:text-5xl font-semibold">Trending Apps</h2>
                    <p className="opacity-80 text-xl mt-4">Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 my-10">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white px-4 py-3 rounded">Show All</button>
                </div>
            </div>
        </div>
    );
};

export default TrendingApps;