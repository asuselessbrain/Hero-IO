import { Suspense, useState } from "react";
import AppCountAndSearch from "../components/Apps/AppCountAndSearch";
import Heading from "../components/shared/Heading";
import type { App } from "./Home";
import Loading from "../components/shared/Loading";
import AllApps from "../components/Apps/AllApps";

const fetchAppsData = async (): Promise<App[]> => {
    const response = await fetch('/data.json');

    if (!response.ok) throw new Error('Failed to fetch apps data');
    return response.json()
}

const Apps = () => {

    const fetchResponse = fetchAppsData()

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="py-20 bg-gray-100 min-h-[calc(100vh-302px)]">
            <div className="max-w-[1440px] mx-auto px-2">
                <div className="pb-6">
                    <Heading title="Our All Applications" subTitle="Explore All Apps on the Market developed by us. We code for Millions" />
                </div>
                <AppCountAndSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}  />

                <Suspense fallback={<Loading />}>
                    <AllApps fetchResponse={fetchResponse} searchTerm={searchTerm} />
                </Suspense>
            </div>
        </div>
    );
};

export default Apps;