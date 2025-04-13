import { Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoutes from "./PrivateRoute"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<PublicRoute/>}/>
            <Route path="/dashboard/*" element={<PrivateRoutes/>}/>
        </Routes>
    )
}

export default AppRoutes;