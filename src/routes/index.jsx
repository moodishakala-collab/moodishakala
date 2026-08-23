import { BrowserRouter, Routes } from "react-router-dom";
import PublicRoutes from "./public.route";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {PublicRoutes}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;