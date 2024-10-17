import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage.jsx";
import Login from "./components/Login.jsx";
import Footer from "./components/Footer.jsx";
import DrugInfo from "./components/DrugInfo.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/drug-info" element={<DrugInfo />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
