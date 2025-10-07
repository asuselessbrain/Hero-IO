import { use } from "react";
import Card from "../shared/Card";
import type { App } from "../../pages/Home";
import { Link } from "react-router";
import Heading from "../shared/Heading";

const TrendingApps = ({fetchResponse}:{fetchResponse: Promise<App[]>}) => {
    const appsData = use(fetchResponse)
    return (
        <div className="bg-gray-100 py-20">
            <div className="max-w-[1440px] mx-auto">
                <Heading title="Trending Apps" subTitle="Explore All Apps on the Market developed by us. We code for Millions" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 my-10">

                    {
                        appsData.slice(0,8).map(app => <Card key={app.id} app={app} />)
                    }
                </div>
                <div className="flex items-center justify-center">
                    <Link to="/apps" className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] text-white px-4 py-3 rounded">Show All</Link>
                </div>
            </div>
        </div>
    );
};

export default TrendingApps;