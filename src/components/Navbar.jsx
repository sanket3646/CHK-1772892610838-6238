import { Link } from "react-router-dom"

export default function Navbar(){

  return(
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold">
        HospitalAI
      </h1>

      <div className="flex gap-6">

        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>

        <Link to="/login" className="hover:text-gray-200">
          Login
        </Link>

        <Link to="/signup" className="hover:text-gray-200">
          Signup
        </Link>

      </div>

    </nav>
  )
}