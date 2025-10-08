import { useState } from "react";

const Sorting = () => {
    const [openDropdown, setOpenDropDown] = useState(false)

    return (
        <div className="relative mt-4">

            <button className="bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-gray-300 focus:ring-gray-300 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center" type="button" onClick={() => setOpenDropDown(!openDropdown)}>Sort By Size <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
            </button>

            {
                openDropdown && (<div className="z-10 absolute top-12 -right-1 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sign out</a>
                        </li>
                    </ul>
                </div>)
            }

        </div>
    );
};

export default Sorting;