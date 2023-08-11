import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import { Main } from "./pages/Main";
import Manual from "./pages/Manual";
import CompanyPromotion from "./pages/CompanyPromotion";
import CPAdd from "./pages/CPAdd";
import CompanyPartner from "./pages/companyPartner";
import CompanyPartnerApply from "./pages/companyPartnerApply";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/*<Route path="/" element={<Main />} />*/}
            <Route path="/manual/*" element={<Manual />} />
            <Route path="/CompanyPromotion/" element={<CompanyPromotion />} />
            <Route path="/CompanyPromotion/add" element={<CPAdd />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/companyPartner/*" element={<CompanyPartner />} />
            <Route
              path="/companyPartner/apply"
              element={<CompanyPartnerApply />}
            />
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
