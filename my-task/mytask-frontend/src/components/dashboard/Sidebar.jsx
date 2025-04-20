import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { RiHome2Line } from "react-icons/ri";
import { MdTaskAlt } from "react-icons/md";
import {
   IoCreateOutline,
   IoNotificationsOutline,
   IoAnalytics,
   IoAdd,
   IoSettingsOutline,
   IoCallOutline,
} from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";

const Sidebar = () => {
   const { logout } = useAuth();
   const location = useLocation();

   const isActive = (path) => location.pathname === path;
   return (
      <div className="w-1/5 pt-6 px-3 bg-zinc-800 border-t-1 border-zinc-700 text-white">
         <ul className="grid gap-2">
            <Link
               to={"/dashboard"}
               className={`flex items-center gap-2 py-2 px-3 rounded-2xl text-base transition-colors ${
                  isActive("/dashboard") && "bg-zinc-600 text-white"
               }`}
            >
               <RiHome2Line className="text-xl" />
               Home
            </Link>

            <Link
               to={"/dashboard/task"}
               className={`flex items-center gap-2 py-2 px-3 rounded-2xl text-base transition-colors ${
                  isActive("/dashboard/task") && "bg-zinc-600 text-white"
               }`}
            >
               <IoCreateOutline className="text-xl" />
               Create Task
            </Link>

            <Link
               to={"/dashboard/lists"}
               className={`flex items-center gap-2 py-2 px-3 rounded-2xl text-base transition-colors ${
                  isActive("/dashboard/lists") && "bg-zinc-600 text-white"
               }`}
            >
               <MdTaskAlt className="text-xl" />
               My tasks
            </Link>

            <li className="flex items-center gap-2 py-2 px-3 rounded-2xl text-base cursor-pointer">
               <IoNotificationsOutline className="text-xl" />
               Inbox
            </li>

            <hr className="text-zinc-600" />

            <li className="flex items-center justify-between gap-2 py-2 px-3 rounded-2xl text-base">
               Insights
               <IoAdd className="text-xl" />
            </li>

            <li className="flex items-center gap-2 py-2 px-3 rounded-2xl text-base cursor-pointer">
               <HiOutlineDocumentText className="text-xl" />
               Portfolio
            </li>

            <li className="flex items-center gap-2 py-2 px-3 rounded-2xl text-base cursor-pointer">
               <IoAnalytics className="text-xl" />
               Reporting
            </li>

            <li className="flex items-center gap-2 py-2 px-3 rounded-2xl text-base cursor-pointer">
               <AiOutlineThunderbolt className="text-xl" />
               Goals
            </li>

            <hr className="text-zinc-600" />

            <li className="flex items-center justify-between gap-2 py-2 px-3 rounded-2xl text-base">
               Projects
               <IoAdd className="text-xl" />
            </li>

            <hr className="text-zinc-600" />

            <li className="flex items-center gap-2 py-2 px-3 rounded-xl text-base cursor-pointer">
               <IoSettingsOutline className="text-xl" />
               Setting
            </li>

            <li className="flex items-center gap-2 py-2 px-3 rounded-xl text-base cursor-pointer">
               <IoCallOutline className="text-xl" />
               Services
            </li>

            <li
               className="flex items-center gap-2 py-2 px-3 rounded-xl text-base cursor-pointer"
               onClick={logout}
            >
               <CiLogout  className="text-xl" />
               logout
            </li>
         </ul>
      </div>
   );
};
export default Sidebar;
