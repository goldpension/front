import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import Manual from "./Manual";
import CompanyPromotion from "./CompanyPromotion";
import NotFound from "./NotFound";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/manual/*" element={<Manual />} />
          <Route path="/CompanyPromotion/*" element={<CompanyPromotion />} />
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
