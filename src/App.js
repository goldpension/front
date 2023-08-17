import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import First from "./components/Main/First";
import { Main } from "./pages/Main";
import Manual from "./pages/Manual";
import CompanyPromotion from "./pages/CompanyPromotion";
import CPAdd from "./pages/CPAdd";
import CompanyPartner from "./pages/companyPartner";
import CompanyPartnerApply from "./pages/companyPartnerApply";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

import Join from "./pages/Join_p/Join";
import Join_tel from "./pages/Join_p/Join_tel";

const App = () => {
  return (
    <div>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          padding: "1px",
        }}
      >
        <BrowserRouter>
          <Navbar />
          <div style={{ position: "relative", top: "50px" }}>
            <Routes>
              <Route path="/findJobs/" element={<Main />} />
              <Route path="/manual/*" element={<Manual />} />
              <Route path="/CompanyPromotion/" element={<CompanyPromotion />} />
              <Route path="/CompanyPromotion/add" element={<CPAdd />} />
              <Route path="/login/*" element={<Login />} />
              <Route path="/" element={<First />} />
              <Route path="/companyPartner/*" element={<CompanyPartner />} />
              <Route
                path="/companyPartner/apply"
                element={<CompanyPartnerApply />}
              />
              <Route path="/join/*" element={<Join />} />
              <Route path="/join/join_tel" element={<Join_tel />} />
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
