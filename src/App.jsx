import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import PatientDashboard from "./pages/PatientDashboard"
import DoctorDashboard from "./pages/DoctorDashboard"
import AdminDashboard from "./pages/AdminDashboard"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/patient-dashboard" element={<PatientDashboard />} />

        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App