import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HeaderContent from './Header/HeaderContent';
// import NavBar from "./Header/NavBar";
import FooterContent from './Footer/FooterContent';
import MainPage from "./Content/MainPage";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      <FooterContent />
    </BrowserRouter>
  );
}

export default App;