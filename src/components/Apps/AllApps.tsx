import { use, useEffect, useMemo, useState } from "react";
import type { App } from "../../pages/Home";
import Card from "../shared/Card";
import AppNotFound from "../shared/AppNotFound";
import appNotFound from "../../assets/images/App-Error.png"
import Loading from "../shared/Loading";

const AllApps = ({ fetchResponse, searchTerm, setFilteredCount }: { fetchResponse: Promise<App[]>, searchTerm: string, setFilteredCount: React.Dispatch<React.SetStateAction<number>> }) => {
    const appsData = use(fetchResponse)
    const [isLoading, setIsLoading] = useState(false);


    const filteredApps = useMemo(() => {
        if (!searchTerm) return appsData;
        return appsData.filter(app => app.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    }, [appsData, searchTerm])

    useEffect(() => {
        setIsLoading(true);

        const timer = setTimeout(() => {
            setFilteredCount(filteredApps.length);
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [filteredApps, setFilteredCount]);

    if (isLoading) {
        return <Loading />;
    }


    if (filteredApps.length === 0) {
        return <AppNotFound imag={appNotFound} title="OPPS!! APP NOT FOUND" subTitle="The App you are requesting is not found on our system.  please try another apps" btnText="Go Back!" link="/apps" minHight="min-h-[calc(100vh-302px)]" />

    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">

            {
                filteredApps.map(app => <Card key={app.id} app={app} />)
            }
        </div>
    );
};

export default AllApps;