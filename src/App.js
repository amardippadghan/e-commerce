import React from "react";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Viewmore from "./components/Viewmore";
import NotfoundPage from "./NotfoundPage";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/viewmore/:id" element={<Viewmore />} />
        <Route path="*" element={<NotfoundPage />} />
        {/* Add more Route components for other paths */}
      </Routes>
    </Router>
  );
}
