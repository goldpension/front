import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { Main } from "./components/Main"
import Manual from "./Manual";
import CompanyPromotion from "./CompanyPromotion";
import NotFound from "./NotFound";
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
            <Route path="/CompanyPromotion/*" element={<CompanyPromotion />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
