import { Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import AboutUsPage from "../pages/AboutUsPage";

import Contact from "../components/Contact";
import Offer from "../components/Offer";
import Career from "../components/Career";
import Vender from "../components/Vender";
import Store from "../components/Store";
import OurCrafts from "../pages/OurCrafts";
import Gallary from "../pages/Gallary";





const PublicRoutes = (
    <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-crafts" element={<OurCrafts/>} />
        <Route path="/offers" element={<Offer />} />
        <Route path="/career" element={<Career />} />
        <Route path="/vendor" element={<Vender />} />
        <Route path="/stores" element={<Store />} />
        <Route path="/gallery" element={<Gallary />} />

        <Route path="*" element={<NotFound />} />
    </Route>
);

export default PublicRoutes;