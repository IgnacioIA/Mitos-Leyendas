// src/routes/AppRoutes.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MazosInicialesPB from "../pages/mazosInicialesPrimerBloque/MazosInicialesPB.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route
          path="/mazoInicialPB"
          element={<MazosInicialesPB />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;