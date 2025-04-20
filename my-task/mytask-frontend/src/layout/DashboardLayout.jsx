import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/sidebar";
import Header from "../components/dashboard/Header";

const DashboardLayout = () => {
   return (
      <div className="h-screen">
         <Header />
         <main className="flex h-[95vh]">
            <Sidebar />
            <Outlet />
         </main>
      </div>
   );
};
export default DashboardLayout;
