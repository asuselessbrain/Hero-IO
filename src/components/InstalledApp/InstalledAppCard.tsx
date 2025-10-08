
import download from "../../assets/images/icon-downloads.png"
import rating from "../../assets/images/icon-ratings.png"

const InstalledAppCard = ({img}: {img: string}) => {
    return (
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between bg-white p-4 rounded my-4">
            <div className="flex items-center gap-6">
                <img src={img} className="h-20 w-20 rounded" alt="App Icon" />
                <div>
                    <h2 className="text-sm md:text-xl font-medium">Forest: Focus for Productivity</h2>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="text-[#00D390] flex items-center gap-2">
                            <img src={download} className="h-4 w-4" alt="" />
                            <p>9M</p>
                        </div>
                        <div className="text-[#FF8811] flex items-center gap-2">
                            <img src={rating} className="h-4 w-4" alt="" />
                            <p>5</p>
                        </div>
                        <div className="opacity-80 flex items-center gap-2">
                            <p>258 MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="bg-[#00D390] hover:bg-green-500 px-4 py-3 rounded text-white cursor-pointer">Uninstall</button>
        </div>
    );
};

export default InstalledAppCard;