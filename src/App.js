import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterContent from './Footer/FooterContent';
import MainPage from "./Content/MainPage";

function App() {
  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
      <FooterContent />
    </BrowserRouter>
  );
}

export default App;