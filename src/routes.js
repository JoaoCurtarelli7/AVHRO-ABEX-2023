import { BrowserRouter, Routes, Route } from "react-router-dom";

import DoacaoTable from "./pages/Doacao/Listagem";
import Home from "./pages/Home";
import HeaderHome from "./components/HeaderHome";
import HeaderPages from "./components/HeaderPages";
import DonationReceivedCreate from "./pages/Doacao/Cadastro";
import DonationDeliveredList from "./pages/DoacaoEntregues/Listagem";
import DonationDeliveredCreate from "./pages/DoacaoEntregues/Cadastro";
import GranteeList from "./pages/Grantee/Listagem";
import GranteeCreate from "./pages/Grantee/Cadastro";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HeaderPages />} />
        <Route path="/" element={<HeaderHome />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/doacoes-recebidas" element={<DoacaoTable />} />
        <Route
          path="/doacoes-recebidas/cadastro"
          element={<DonationReceivedCreate />}
        />

        <Route path="/doacaos-entregues" element={<DonationDeliveredList />} />
        <Route
          path="/doacoes-entregues/cadastro"
          element={<DonationDeliveredCreate />}
        />

        <Route path="/donatarios" element={<GranteeList />} />
        <Route path="/donatarios/cadastro" element={<GranteeCreate />} />

        <Route path="/doadores" element={<DoacaoTable />} />
        <Route path="/familias" element={<DoacaoTable />} />

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
