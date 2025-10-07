import { FaSearch } from "react-icons/fa";

const AppCountAndSearch = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-2xl font-semibold flex-1">(132) Apps Found</p>
            <div className="relative mt-4">
                <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search Your App"
                    className="w-full pl-10 p-3 rounded border-2 border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    );
};

export default AppCountAndSearch;