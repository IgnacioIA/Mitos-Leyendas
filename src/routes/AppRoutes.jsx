// src/routes/AppRoutes.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home.jsx";
import MazosInicialesPB from "../pages/mazosInicialesPrimerBloque/MazosInicialesPB.jsx";
import Leyendas4y0 from "../pages/leyendas 4.0/Leyendas4-0.jsx";
import Shogun from "../pages/shogun/Shogun.jsx";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

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

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;