import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import { Main } from "./pages/Main";
import Manual from "./pages/Manual";
import CompanyPromotion from "./pages/CompanyPromotion";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Join from "./pages/Join_p/Join";
import Join_tel from "./pages/Join_p/Join_tel";

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
              <Route path="/*" element={<NotFound />}></Route>
            </Routes>
          </BrowserRouter>
        }
      </div>
    </div>
  );
};

export default App;
