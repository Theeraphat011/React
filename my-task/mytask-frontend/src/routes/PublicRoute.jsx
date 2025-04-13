import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";

const PublicRoute = () => {
   return (
      <AuthLayout>
         <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route index element={<Navigate to="/login" replace />} />
         </Routes>
      </AuthLayout>
   );
};
export default PublicRoute;
