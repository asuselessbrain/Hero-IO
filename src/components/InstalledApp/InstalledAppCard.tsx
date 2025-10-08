
import download from "../../assets/images/icon-downloads.png"
import rating from "../../assets/images/icon-ratings.png"
import type { App } from "../../pages/Home";

const InstalledAppCard = ({ installed, handleUninstall }: { installed: App, handleUninstall: (id: number) => void }) => {
    return (
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between bg-white p-4 rounded my-4">
            <div className="flex items-center gap-6">
                <img src={installed?.image} className="h-20 w-20 rounded" alt="App Icon" />
                <div>
                    <h2 className="text-sm md:text-xl font-medium">{installed?.title}</h2>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="text-[#00D390] flex items-center gap-2">
                            <img src={download} className="h-4 w-4" alt="" />
                            <p>{installed?.downloads}</p>
                        </div>
                        <div className="text-[#FF8811] flex items-center gap-2">
                            <img src={rating} className="h-4 w-4" alt="" />
                            <p>{installed?.ratingAvg}</p>
                        </div>
                        <div className="opacity-80 flex items-center gap-2">
                            <p>{installed?.size} MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={()=>handleUninstall(installed?.id)} className="bg-[#00D390] hover:bg-green-500 px-4 py-3 rounded text-white cursor-pointer">Uninstall</button>
        </div>
    );
};

export default InstalledAppCard;