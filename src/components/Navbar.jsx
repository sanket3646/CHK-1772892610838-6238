import { Link } from "react-router-dom";
import { Menu, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">

      <div className="max-w-6xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">

          <div className="bg-primary text-white px-2 py-1 rounded-md font-bold">
            +
          </div>

          <span className="font-semibold text-gray-700">
            Smart Government Hospital Network
          </span>

        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-600 font-medium">

          <Link to="/" className="hover:text-primary">
            Home
          </Link>

          <Link to="/admin" className="hover:text-primary">
            Admin
          </Link>

          <Link to="/doctor" className="hover:text-primary">
            Doctor
          </Link>

        </div>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">

          <Menu className="cursor-pointer text-gray-600 md:hidden" />

          <Bell className="cursor-pointer text-gray-600" />

          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
          />

        </div>

      </div>

    </nav>
  );
}