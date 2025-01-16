import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderContent from './Header/HeaderContent';
import NavBar from "./Header/NavBar";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<HeaderContent />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;