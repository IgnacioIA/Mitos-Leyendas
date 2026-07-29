// src/routes/AppRoutes.jsx
import MainLayout from "../layout/MainLayout/MainLayout";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollTop from "./ScrollTop";

import Home from "../pages/home/Home.jsx";
import MazosInicialesPB from "../pages/mazosInicialesPrimerBloque/MazosInicialesPB.jsx";
import Leyendas4y0 from "../pages/leyendas 4.0/Leyendas4-0.jsx";
import Shogun from "../pages/shogun/Shogun.jsx";
import Apj from "../pages/APJ/Apj.jsx";
import BanList from "../pages/banList/BanList.jsx";
import LorePage from "../pages/lorePage/LorePage.jsx";
import Formatos from "../pages/formatos/Formatos.jsx";
import EdicionPBX from "../pages/edicionPBX/EdicionPBX.jsx";
import TiendasAmigas from "../pages/tiendaAmigas/TiendaAmigas.jsx";
import TeamsOficiales from "../pages/teamsOficiales/TeamsOficiales.jsx";
import HistoriaMYL from "../pages/historiaMYL/HistoriaMYL.jsx";
import BannerPremier from "../pages/premierBsAs2026/Premier.jsx";
import DesafioAmatista from "../pages/Desafio-Amatista/Desafio-Amatista.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollTop />
        <Routes>

          <Route element={<MainLayout />}>
          
            <Route
              path="/"
              element={<Navigate to="/Home" replace />}
            />
            {/* Home */}
            <Route
              path="/Home"
              element={<Home />}
            />

            {/* Mazos Inicial */}
            <Route
              path="/mazoInicialPB"
              element={<MazosInicialesPB />}
            />

            {/* Mitos 4.0 */}
            <Route
              path="/mitos4.0"
              element={<Leyendas4y0 />}
            />

            {/* Shogun */}
            <Route
              path="/Shogun"
              element={<Shogun />}
            />

            {/* Aprende a jugar */}
            <Route
              path="/Apj"
              element={<Apj />}
            />

            {/* BanList */}
            <Route
              path="/BanList"
              element={<BanList />}
            />

             {/* LorePage */}
            <Route
              path="/LorePage"
              element={<LorePage />}
            />

             {/* Formatos */}
            <Route
              path="/Formatos"
              element={<Formatos />}
            />

            {/* Edicion PBX */}
            <Route
              path="/EdicionPBX"
              element={<EdicionPBX />}
            />

            {/* Tiendas Amigas */}
            <Route
              path="/TiendasAmigas"
              element={<TiendasAmigas />}
            />

            {/* Teams Oficiales */}
            <Route
              path="/TeamsOficiales"
              element={<TeamsOficiales />}
            />

            {/* Historia MYL */}
            <Route
              path="/HistoriaMYL"
              element={<HistoriaMYL />}
            />

            {/* Premier Bs As */}
            <Route
              path="/PremierBsAs2026"
              element={<BannerPremier />}
            />

            {/* DesafioAmatista */}
            <Route
              path="/DesafioAmatista"
              element={<DesafioAmatista />}
            />


          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;