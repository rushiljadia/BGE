import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
