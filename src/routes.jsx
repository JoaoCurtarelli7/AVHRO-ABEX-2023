import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeaderPages from "./components/HeaderPages";
import DonationReceivedCreate from "./pages/DoacaoRecebidas/Cadastro";
import DonationDeliveredList from "./pages/DoacaoEntregues/Listagem";
import DonationDeliveredCreate from "./pages/DoacaoEntregues/Cadastro";
import GranteeList from "./pages/Grantee/Listagem";
import GranteeCreate from "./pages/Grantee/Cadastro";
import DonorList from "./pages/Doadores/Listagem";
import DonorCreate from "./pages/Doadores/Cadastro";
import DonationReceivedList from "./pages/DoacaoRecebidas/Listagem";
import FamilyCreate from "./pages/Familias/Cadastro";
import FamilyList from "./pages/Familias/Listagem";
import NotFound from "./pages/NotFoud";

function AppRoutes() {
  return (
    <BrowserRouter>
      <HeaderPages />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/doacoes-recebidas" element={<DonationReceivedList />} />
        <Route
          path="/doacoes-recebidas-cadastro/:id?"
          element={<DonationReceivedCreate />}
        />

        <Route path="/doacoes-entregues" element={<DonationDeliveredList />} />
        <Route
          path="/doacoes-entregues-cadastro/:id?"
          element={<DonationDeliveredCreate />}
        />

        <Route path="/donatarios" element={<GranteeList />} />
        <Route path="/donatarios-cadastro/:id?" element={<GranteeCreate />} />

        <Route path="/doadores" element={<DonorList />} />
        <Route path="/doadores-cadastro/:id?" element={<DonorCreate />} />

        <Route path="/familias" element={<FamilyList />} />
        <Route path="/familias-cadastro/:id?" element={<FamilyCreate />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
