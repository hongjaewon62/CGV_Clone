import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderContent from './Header/HeaderContent';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<HeaderContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;