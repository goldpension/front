import React, { Suspense, lazy } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import NotFound from "./pages/NotFound";

const First = lazy(() => import("./pages/First"));
const Main = lazy(() => import("./pages/Main"));
const Manual = lazy(() => import("./pages/Manual"));
const CompanyPromotion = lazy(() => import("./pages/CompanyPromotion"));
const CompanyPartner = lazy(() => import("./pages/companyPartner"));
const CompanyPartnerApply = lazy(() => import("./pages/companyPartnerApply"));
const CompanyPartnerApplyDone = lazy(() => import("./pages/CompanyPartnerApplyDone"));
const Login = lazy(() => import("./pages/Login"));
const Join = lazy(() => import("./pages/Join_p/Join"));
const Join_tel = lazy(() => import("./pages/Join_p/Join_tel"));
const MyInfo = lazy(() => import("./pages/MyInfo"));
const MyInfo1 = lazy(() => import("./pages/MyInfo1"));
const MyInfo2 = lazy(() => import("./pages/MyInfo2"));
const ApplyCheck = lazy(() => import("./pages/ApplyCheck/ApplyCheck"));
const RedirectHandler = lazy(() => import("./components/Login/RedirectHandler"));
const LoginSuccess = lazy(() => import("./components/Login/LoginSuccess"));
const Account = lazy(() => import("./components/Info/Account"));
const Zero = lazy(() => import("./pages/Zero"));

const App = () => {
  return (
    <RecoilRoot>
      <div>
        <div
          className="App"
          style={{
            display: "flex",
            flexDirection: "column",
            height: '100vh'
          }}
        >
          <BrowserRouter>
            <Navbar />
            <div
              style={{
                height: '100vh',
                paddingTop: '50px',
                position: "relative",
                backgroundColor: "#eeeeee",
              }}
            >
              <Suspense fallback={<div>Loading...</div>}>
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
              </Suspense>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </RecoilRoot>
  );
};

export default App;
