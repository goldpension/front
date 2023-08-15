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

import Join from "./pages/Join_p/Join";
import Join_tel from "./pages/Join_p/Join_tel";
import MyInfo1 from "./pages/MyInfo1";
import MyInfo2 from "./pages/MyInfo2";
import ApplyCheckMem from "./pages/ApplyCheck/ApplyCheckMem";
import ApplyCheckNon from "./pages/ApplyCheck/ApplyCheckNon";

const App = () => {
  return (
    <div>
      <div
        className="App"
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Main />} /> */}
            <Route path="/" element={<ApplyCheckNon />} />
            <Route path="/ApplyCheckMem/*" element={<ApplyCheckMem />} />
            <Route path="/manual/*" element={<Manual />} />
            <Route path="/CompanyPromotion/" element={<CompanyPromotion />} />
            <Route path="/CompanyPromotion/add" element={<CPAdd />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/companyPartner/*" element={<CompanyPartner />} />
            <Route
              path="/companyPartner/apply"
              element={<CompanyPartnerApply />}
            />
            {/* <Route path="/join/*" element={<Join />} />
            <Route path="/join/join_tel" element={<Join_tel />} /> */}
            <Route path="/join/*" element={<MyInfo1 />} />
            <Route path="/join/join_tel" element={<MyInfo2 />} />
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
