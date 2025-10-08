import { use } from "react";
import type { App } from "../../pages/Home";
import AppStatas from "./AppStatas";
import RatingChart from "./RatingChart";


const AppDetailsComponent = ({ singleAppResponse, id }: { singleAppResponse: Promise<App[]>, id: string | undefined }) => {
    const singleAppData = use(singleAppResponse);

    const app = singleAppData.find(app => app.id === Number(id));

    if (!app) {
        return <div>App not found</div>
    }
    return (
        <div className="bg-gray-100 min-h-[calc(100vh-302px)]">
            <div className="max-w-[1440px] mx-auto px-2 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-10 p-10">
                    <img src={app?.image} alt={app?.title} className="h-[350px] w-[350px]" />
                    <div>
                        <h2 className="text-4xl font-bold">{app?.title}</h2>
                        <p className="text-xl mt-2">Developed by <span className="text-xl font-semibold bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent">{app?.companyName}</span></p>
                        <AppStatas downloads={app?.downloads} ratingAvg={app?.ratingAvg} reviews={app?.reviews} />
                        <button className="text-xl font-semibold text-white px-5 py-4 bg-[#00D390] rounded mt-8">Install Now({app?.size} MB)</button>
                    </div>
                </div>
                <RatingChart ratings={app?.ratings} />
            </div>
        </div>
    );
};

export default AppDetailsComponent;