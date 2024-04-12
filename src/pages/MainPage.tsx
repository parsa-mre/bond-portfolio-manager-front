import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
    return (
        <div className="flex p-2 gap-2 h-[100vh]">
            {/* sidebar */}
            <div className=" min-w-52">
                <Sidebar />
            </div>
            <div className="flex-1 flex-grow">
                <Outlet />
            </div>
        </div>
    );
};
