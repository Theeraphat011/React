import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Dashborad from "../pages/dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import TaskPage from "../pages/dashboard/TaskPage";
import ListPage from "../pages/dashboard/ListPage";

const PrivateRoutes = () => {
   const { token } = useAuth();

   if (!token) {
      return <Navigate to="/login" replace />;
   }

   return (
      <Routes>
         <Route path="*" element={<DashboardLayout />}>
            <Route index element={<Dashborad />} />
            <Route path="task" element={<TaskPage />} />
            <Route path="lists" element={<ListPage />} />
         </Route>
      </Routes>
   );
};
export default PrivateRoutes;
