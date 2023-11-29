import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterPages from "./components/FooterPages";
import HeaderPages from "./components/HeaderPages";
import DonaratyList from "./pages/Donatary/List";
import DonaratyCreate from "./pages/Donatary/Register";
import DonationDeliveredList from "./pages/DonationDelivered/List";
import DonationDeliveredCreate from "./pages/DonationDelivered/Register";
import DonationReceivedList from "./pages/DonationReceived/List";
import DonationReceivedCreate from "./pages/DonationReceived/Register";
import DonorList from "./pages/Donor/List";
import DonorCreate from "./pages/Donor/Register";
import FamilyList from "./pages/Family/List";
import FamilyCreate from "./pages/Family/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFoud";

function AppRoutes() {
  return (
    <BrowserRouter>
      <HeaderPages />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <FooterPages />
            </>
          }
        />

        <Route path="/donation-received" element={<DonationReceivedList />} />
        <Route
          path="/donation-received-register/:id?"
          element={<DonationReceivedCreate />}
        />

        <Route path="/donation-delivered" element={<DonationDeliveredList />} />
        <Route
          path="/donation-delivered-register/:id?"
          element={<DonationDeliveredCreate />}
        />

        <Route path="/donatary" element={<DonaratyList />} />
        <Route path="/donatary-register/:id?" element={<DonaratyCreate />} />

        <Route path="/donor" element={<DonorList />} />
        <Route path="/donor-register/:id?" element={<DonorCreate />} />

        <Route path="/family" element={<FamilyList />} />
        <Route path="/family-register/:id?" element={<FamilyCreate />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
