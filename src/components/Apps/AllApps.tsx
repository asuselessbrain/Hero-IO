import { use, useMemo } from "react";
import type { App } from "../../pages/Home";
import Card from "../shared/Card";

const AllApps = ({ fetchResponse, searchTerm }: { fetchResponse: Promise<App[]>, searchTerm: string }) => {
    const appsData = use(fetchResponse)
    const filteredApps = useMemo(() => {
        if (!searchTerm) return appsData;
        return appsData.filter(app => app.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    }, [appsData, searchTerm])

    if (filteredApps.length === 0) {
        return <div className="flex flex-col items-center justify-center h-[calc(100vh-802px)] bg-gray-100">
            <p className="text-center text-2xl md:text-3xl font-semibold text-gray-600">
                No apps found matching "<span className="text-blue-500">{searchTerm}</span>"
            </p>
        </div>

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