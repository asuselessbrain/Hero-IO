import { Suspense, useState } from "react";
import InstalledApp from "../components/InstalledApp/InstalledApp";
import Sorting from "../components/InstalledApp/Sorting";
import Heading from "../components/shared/Heading";
import Loading from "../components/shared/Loading";
import { getFromLocalStorage, removeItemFromDB } from "../utils/LocalStorage";
import { toast } from "react-toastify";

const apps = fetch('/data.json').then(res => res.json())

const InstalledApps = () => {
    const [installedApps, setInstalledApps] = useState<number[]>(getFromLocalStorage("installedApps") || []);
    const [sortOrder, setSortOrder] = useState("")

    const handleUninstall = (id: number) => {
        const newApps = removeItemFromDB(id)
        setInstalledApps(newApps)
        toast.success("App uninstalled successfully!")
    }

    const handleSort = (value: string) => {
        setSortOrder(value)
    }

    return (
        <div className="bg-gray-100 min-h-[calc(100vh-302px)] py-20">
            <div className="max-w-[1440px] mx-auto px-2">
                <Heading title="My Installed Apps" subTitle="Explore All Trending Apps on the Market developed by us" />
                <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                    <p className="text-2xl font-semibold flex-1">({installedApps.length}) Apps Found</p>
                    <Sorting handleSort={handleSort} />
                </div>
                <Suspense fallback={<Loading />}>
                    <InstalledApp apps={apps} installedApps={installedApps} handleUninstall={handleUninstall} sortOrder={sortOrder} />
                </Suspense>
            </div>

        </div>
    );
};

export default InstalledApps;