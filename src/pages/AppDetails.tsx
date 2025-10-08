import { Suspense } from "react";
import { useParams } from "react-router";
import Loading from "../components/shared/Loading";
import AppDetailsComponent from "../components/AppDetails/AppDetails";

const singleAppResponse = fetch(`/data.json`).then(res => res.json());


const AppDetails = () => {
    const { id } = useParams();

    return (
        <Suspense fallback={<Loading />}>
            <AppDetailsComponent singleAppResponse={singleAppResponse} id={id} />
        </Suspense>
    );
};

export default AppDetails;