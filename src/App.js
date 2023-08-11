import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import { Main } from "./pages/Main";
import Manual from "./pages/Manual";
import CompanyPromotion from "./pages/CompanyPromotion";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Join from "./pages/Join_p/Join";
import Join_k from "./pages/Join_p/Join_k";
import Join_n from "./pages/Join_p/Join_n";
import Join_tel from "./pages/Join_p/Join_tel";
import ApplyCheckNon from "./pages/ApplyCheckNon";

const App = () => {
  return (
    <div>
      <div className="App">
        {
          <BrowserRouter>
            <Navbar />
            <Routes>
              {/*<Route path="/" element={<Main />} />*/}
              <Route path="/manual/*" element={<Manual />} />
              <Route
                path="/CompanyPromotion/*"
                element={<CompanyPromotion />}
              />
              <Route path="/login/*" element={<Login />} />
              <Route path="/join/*" element={<Join />} />
              <Route path="/join/join_tel" element={<Join_tel />} />
              {/* <Route path="/join/*" element={<Ji />} /> */}
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </BrowserRouter>
        }
      </div>
    </div>
  );
};

export default App;
