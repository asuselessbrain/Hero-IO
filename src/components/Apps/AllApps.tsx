import { use, useMemo } from "react";
import type { App } from "../../pages/Home";
import Card from "../shared/Card";

const AllApps = ({ fetchResponse, searchTerm }: { fetchResponse: Promise<App[]>, searchTerm: stringF }) => {
    const appsData = use(fetchResponse)
    const filteredApps = useMemo(() => {
        if (!searchTerm) return appsData;
        return appsData.filter(app => app.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    }, [appsData, searchTerm])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">

            {
                filteredApps.map(app => <Card key={app.id} app={app} />)
            }
        </div>
    );
};

export default AllApps;