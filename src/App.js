import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Ethnographic from "./components/Ethnographic";
import Infographic from "./components/Infographic";
import References from "./components/References";

function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <div className="main-content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ethnographic" element={<Ethnographic />} />
            <Route path="/infographic" element={<Infographic />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
