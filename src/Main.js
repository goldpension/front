import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./js/App";
import ManualPage from "./page/ManualPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="ManualPage/*" element={<ManualPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
