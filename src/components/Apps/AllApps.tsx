import { use } from "react";
import type { App } from "../../pages/Home";
import Card from "../shared/Card";

const AllApps = ({ fetchResponse }: { fetchResponse: Promise<App[]> }) => {
    const appsData = use(fetchResponse)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">

            {
                appsData.map(app => <Card key={app.id} app={app} />)
            }
        </div>
    );
};

export default AllApps;