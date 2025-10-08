import InstalledAppCard from "./InstalledAppCard";
import type { App } from "../../pages/Home";
import { use, useEffect, useState } from "react";
const InstalledApp = ({ apps, installedApps, handleUninstall, sortOrder }: { apps: Promise<App[]>, installedApps: number[], handleUninstall: (id: number) => void, sortOrder: string }) => {
    const allApps = use(apps)
    const [installed, setInstalled] = useState<App[] | null>([])

    const parseDownloads = (val: string) => {
        if (val.endsWith("k")) return Number(val.replace("k", "")) * 1_000;
        if (val.endsWith("M")) return Number(val.replace("M", "")) * 1_000_000;
        return Number(val);
    };

    useEffect(() => {
        const installedApp = installedApps.map(insApp => allApps.find(app => app.id === insApp)).filter((app): app is App => app !== undefined);
        if (sortOrder) {
            const sortedApps = [...installedApp];
            if (sortOrder === "asc") {
                sortedApps.sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
            } else if (sortOrder === "dsc") {
                sortedApps.sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
            }
            setInstalled(sortedApps)
        }
        else {
            setInstalled(installedApp)
        }

    }, [installedApps, allApps, sortOrder])

    return (
        <div>
            {
                installed?.map(app => <InstalledAppCard key={app.id} installed={app} handleUninstall={handleUninstall} />)
            }
        </div>
    );
};

export default InstalledApp;