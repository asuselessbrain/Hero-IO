import InstalledAppCard from "./InstalledAppCard";
import type { App } from "../../pages/Home";
import { use, useEffect, useState } from "react";
const InstalledApp = ({ apps, installedApps, handleUninstall }: { apps: Promise<App[]>, installedApps: number[], handleUninstall: (id: number) => void }) => {
    const allApps = use(apps)
    const [installed, setInstalled] = useState<App[] | null>([])

    useEffect(() => {
        const installedApp = installedApps.map(insApp => allApps.find(app => app.id === insApp)).filter((app): app is App => app !== undefined);
        setInstalled(installedApp)

    }, [installedApps, allApps])

    return (
        <div>
            {
            installed?.map(app => <InstalledAppCard key={app.id} installed={app} handleUninstall={handleUninstall} />)
            }
        </div>
    );
};

export default InstalledApp;