import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold">
        Hospital Platform
      </h1>

      <div className="flex gap-6">

        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>

        <Link to="/patient-dashboard" className="hover:text-gray-200">
          Patient
        </Link>

        <Link to="/doctor-dashboard" className="hover:text-gray-200">
          Doctor
        </Link>

        <Link to="/admin-dashboard" className="hover:text-gray-200">
          Admin
        </Link>

      </div>

    </nav>
  )
}