
import { Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import AboutUsPage from "../pages/AboutUsPage";
import Women from "../components/Women";
import Men from "../components/Men";
import Kids from "../components/Kids";
import Contact from "../components/Contact";
import NewArrival from "../components/NewArrival";
import Offer from "../components/Offer";
import Career from "../components/Career";
import Vender from "../components/Vender";
import Store from "../components/Store";




const PublicRoutes = (
    <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-arrivals" element={<NewArrival />} />
        <Route path="/offers" element={<Offer />} />
        <Route path="/career" element={<Career />} />
        <Route path="/vendor" element={<Vender />} />
        <Route path="/stores" element={<Store />} />
        <Route path="*" element={<NotFound />} />
    </Route>
);

export default PublicRoutes;