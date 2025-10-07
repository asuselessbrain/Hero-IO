import Hero from "../components/Home/Hero";
import Statistics from "../components/Home/Statistics";
import TrendingApps from "../components/Home/TrendingApps";
import { Suspense } from "react";
import Loading from "../components/shared/Loading";

export interface Rating {
    name: string;
    count: number;
}

export interface App {
    id: number;
    image: string;
    title: string;
    companyName: string;
    description: string;
    size: number;
    reviews: number;
    ratingAvg: number;
    downloads: number;
    ratings: Rating[];
}


const fetchAppsData = async (): Promise<App[]> => {
    const response = await fetch('/data.json');

    if (!response.ok) throw new Error('Failed to fetch apps data');
    return response.json()
}

const Home = () => {

    const fetchResponse = fetchAppsData()
    return (
        <Suspense fallback={<Loading />}>
            <Hero />
            <Statistics />
            <TrendingApps fetchResponse={fetchResponse} />
        </Suspense>
    );
};

export default Home;