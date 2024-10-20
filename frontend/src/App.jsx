import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage.jsx";
import Login from "./components/Login.jsx";
import Footer from "./components/Footer.jsx";
import DrugInfo from "./components/DrugInfo.jsx"
import Registration from "./components/Registration.jsx";
import NavBar from "./components/NavBar.jsx";
import About from "./components/About.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/drug-info" element={<DrugInfo />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
