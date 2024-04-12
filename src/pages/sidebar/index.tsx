import { useState } from "react";
import { FiFileText, FiPieChart, FiBarChart2 } from "react-icons/fi"; // Importing icons from react-icons
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState("/overview");

    const handleNavigate = (path: string) => {
        setSelectedItem(path);
    };

    return (
        <div className="sidebar rounded-lg bg-main text-paragraph h-full flex flex-col justify-between">
            <div className="mt-8">
                <div className="flex items-center justify-center mb-8 text-white">
                    <FiPieChart size={32} />
                    <h1 className="text-2xl font-bold ml-2">Portfolio</h1>
                </div>
                <hr className="border border-paragraph mb-8 h-[0.5px]" />{" "}
                {/* Line separator */}
                <ul className="p-4">
                    <li
                        className={`mb-4 cursor-pointer ${
                            selectedItem === "/stats" ? "text-bgcolor" : ""
                        }`}
                        onClick={() => handleNavigate("/stats")}
                    >
                        <Link to="/stats">
                            <div className="flex items-center">
                                <FiBarChart2 className="mr-2" /> Statistics
                            </div>
                        </Link>
                    </li>
                    {/* <li
                        className={`mb-4 cursor-pointer ${
                            selectedItem === "/overview" ? "text-bgcolor" : ""
                        }`}
                        onClick={() => handleNavigate("/overview")}
                    >
                        <Link to="/overview">
                            <div className="flex items-center">
                                <FiUser className="mr-2" /> Overview
                            </div>
                        </Link>
                    </li> */}
                    <li
                        className={`mb-4 cursor-pointer ${
                            selectedItem === "/issuers" ? "text-bgcolor" : ""
                        }`}
                        onClick={() => handleNavigate("/issuers")}
                    >
                        <Link to="/issuers">
                            <div className="flex items-center">
                                <FiFileText className="mr-2" /> List Issuers
                            </div>
                        </Link>
                    </li>
                    <li
                        className={`mb-4 cursor-pointer ${
                            selectedItem === "/create-issuers"
                                ? "text-bgcolor"
                                : ""
                        }`}
                        onClick={() => handleNavigate("/create-issuers")}
                    >
                        <Link to="/create-issuers">
                            <div className="flex items-center">
                                <FiFileText className="mr-2" /> Create Issuers
                            </div>
                        </Link>
                    </li>
                    <li
                        className={`mb-4 cursor-pointer ${
                            selectedItem === "/bonds" ? "text-bgcolor" : ""
                        }`}
                        onClick={() => handleNavigate("/bonds")}
                    >
                        <Link to="/bonds">
                            <div className="flex items-center">
                                <FiFileText className="mr-2" /> List Bonds
                            </div>
                        </Link>
                    </li>
                    <li
                        className={`mb-4 cursor-pointer ${
                            selectedItem === "/create-bonds"
                                ? "text-bgcolor"
                                : ""
                        }`}
                        onClick={() => handleNavigate("/create-bonds")}
                    >
                        <Link to="/create-bonds">
                            <div className="flex items-center">
                                <FiFileText className="mr-2" /> Create Bonds
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className=" text-xs pb-4 text-gray-400 text-center">
                Bond Portfolio Management
            </div>
        </div>
    );
};

export default Sidebar;
