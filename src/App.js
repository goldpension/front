import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import First from "./pages/First";
import { Main } from "./pages/Main";

import Manual from "./pages/Manual";
import CompanyPromotion from "./pages/CompanyPromotion";
import CompanyPartner from "./pages/companyPartner";
import CompanyPartnerApply from "./pages/companyPartnerApply";
import CompanyPartnerApplyDone from "./pages/CompanyPartnerApplyDone";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

import Join from "./pages/Join_p/Join";
import Join_tel from "./pages/Join_p/Join_tel";
import MyInfo from "./pages/MyInfo";
import MyInfo1 from "./pages/MyInfo1";
import MyInfo2 from "./pages/MyInfo2";
import ApplyCheck from "./pages/ApplyCheck/ApplyCheck";
import RedirectHandler from "./components/Login/RedirectHandler";
import LoginSuccess from "./components/Login/LoginSuccess";
import Account from "./components/Info/Account";
import Zero from "./pages/Zero";

const App = () => {
  return (
    <RecoilRoot>
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
            <div
              style={{
                position: "relative",
                top: "50px",
                backgroundColor: "#eeeeee",
              }}
            >
              <Routes>
                <Route path="/findJobs/" element={<Main />} />
                <Route path="/manual/*" element={<Manual />} />
                <Route
                  path="/CompanyPromotion/"
                  element={<CompanyPromotion />}
                />
                <Route path="/login/*" element={<Login />} />
                <Route path="/myinfo" element={<MyInfo />} />

                <Route
                  path="/accounts/kakao/callback/*"
                  element={<RedirectHandler />}
                />
                {/* <Route path="/loginSuccess" element={<First />} /> */}
                <Route path="/loginSuccess" element={<Zero />} />
                {/* <Route path="/first" element={<First />} /> */}
                <Route path="/" element={<Zero />} />
                <Route path="/first" element={<First />} />
                <Route path="/companyPartner/*" element={<CompanyPartner />} />
                <Route
                  path="/companyPartner/apply"
                  element={<CompanyPartnerApply />}
                />
                <Route
                  path="/companyPartner/apply/done"
                  element={<CompanyPartnerApplyDone />}
                />
                <Route path="/apply" element={<ApplyCheck />} />
                <Route path="/join/*" element={<Join />} />
                <Route path="/join/join_tel" element={<Join_tel />} />
                <Route path="/*" element={<NotFound />}></Route>
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </RecoilRoot>
  );
};

export default App;