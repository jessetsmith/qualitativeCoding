import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Ethnographic from "./components/Ethnographic";
import Infographic from "./components/Infographic";
import References from "./components/References";
import BarriersAccessFlyer from "./components/BarriersAccessFlyer";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import AdminBarriersAccess from "./components/AdminBarriersAccess";
import AdminLocations from "./components/AdminLocations";
import { isAdminLoggedIn } from "./utils/adminAuth";

function RequireAdmin({ children }) {
  const authed = isAdminLoggedIn();
  if (!authed) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

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
            <Route path="/barriers-access" element={<BarriersAccessFlyer />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <RequireAdmin>
                  <AdminDashboard />
                </RequireAdmin>
              }
            />
            <Route
              path="/admin/barriers-access"
              element={
                <RequireAdmin>
                  <AdminBarriersAccess />
                </RequireAdmin>
              }
            />
            <Route
              path="/admin/locations"
              element={
                <RequireAdmin>
                  <AdminLocations />
                </RequireAdmin>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
