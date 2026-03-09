import { Menu, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">

      <div className="flex items-center gap-2">
        <div className="bg-primary text-white p-2 rounded-lg">
          +
        </div>

        <span className="font-semibold text-gray-700">
          Smart Government Hospital Network
        </span>
      </div>

      <div className="flex items-center gap-4">

        <Menu className="cursor-pointer text-gray-600"/>

        <Bell className="cursor-pointer text-gray-600"/>

        <img
          src="https://i.pravatar.cc/40"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </nav>
  );
}