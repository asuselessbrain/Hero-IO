import { use, useEffect, useState } from "react";
import type { App } from "../../pages/Home";
import AppStatas from "./AppStatas";
import RatingChart from "./RatingChart";
import AppNotFound from "../shared/AppNotFound";
import appNotFound from '../../assets/images/App-Error.png'
import { getFromLocalStorage, setItemIntoDB } from "../../utils/LocalStorage";



const AppDetailsComponent = ({ singleAppResponse, id }: { singleAppResponse: Promise<App[]>, id: string | undefined }) => {
    const singleAppData = use(singleAppResponse);

    const app = singleAppData.find(app => app.id === Number(id));
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const storedApp = getFromLocalStorage('installedApps');
        if (storedApp.includes(app?.id)) {
            setIsInstalled(true)
        }
    }, [setIsInstalled, app?.id])

    const handleInstall = (id: number) => {
        setItemIntoDB(id);
        setIsInstalled(true);
    };

    if (!app) {
        return <AppNotFound imag={appNotFound} title="OPPS!! APP NOT FOUND" subTitle="The App you are requesting is not found on our system.  please try another apps" btnText="Go Back!" link="/apps" minHight="min-h-[calc(100vh-302px)]" />
    }



    return (
        <div className="bg-gray-100 min-h-[calc(100vh-302px)]">
            <div className="max-w-[1440px] mx-auto px-2 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-10 p-10 border-b border-gray-300">
                    <img src={app?.image} alt={app?.title} className="h-[350px] w-[350px]" />
                    <div>
                        <h2 className="text-4xl font-bold">{app?.title}</h2>
                        <p className="text-xl mt-2">Developed by <span className="text-xl font-semibold bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent">{app?.companyName}</span></p>
                        <AppStatas downloads={app?.downloads} ratingAvg={app?.ratingAvg} reviews={app?.reviews} />
                        <button disabled={isInstalled} onClick={() => handleInstall(app?.id)} className={`text-xl font-semibold text-white px-5 py-4 bg-[#00D390] rounded mt-8 ${isInstalled ? "cursor-not-allowed" : "cursor-pointer"}`}>{isInstalled ? "Installed" : `Install Now(${app?.size} MB)`}</button>
                    </div>
                </div>
                <RatingChart ratings={app?.ratings} />
                <div>
                    <h3 className='my-6 text-2xl font-semibold'>Description</h3>
                    <p className="text-justify opacity-80">{app?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetailsComponent;