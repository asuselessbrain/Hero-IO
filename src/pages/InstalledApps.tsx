import Sorting from "../components/InstalledApp/Sorting";
import Heading from "../components/shared/Heading";
import img from "../assets/images/demo-app (1).webp"
import InstalledAppCard from "../components/InstalledApp/InstalledAppCard";

const InstalledApps = () => {

    return (
        <div className="bg-gray-100 min-h-[calc(100vh-302px)] py-20">
            <div className="max-w-[1440px] mx-auto px-2">
                <Heading title="My Installed Apps" subTitle="Explore All Trending Apps on the Market developed by us" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                    <p className="text-2xl font-semibold flex-1">(132) Apps Found</p>
                    <Sorting />
                </div>
                <InstalledAppCard img={img} />
            </div>

        </div>
    );
};

export default InstalledApps;