import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";
export default function Navbar() {
  const { user, role } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    setUser(user);

    const { data } = await supabase
      .from("users")
      .select("role")
      .eq("id", user.id)
      .single();

    if (data) {
      setRole(data.role);
    }
  }

  async function logout() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Hospital Platform
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/">Home</Link>

        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}

        {user && (
          <>
            <Link to="/search-hospital">Find Hospital</Link>

            {role === "patient" && (
              <Link to="/patient-dashboard">Dashboard</Link>
            )}

            {role === "doctor" && <Link to="/doctor-dashboard">Dashboard</Link>}

            {role === "admin" && <Link to="/admin-dashboard">Dashboard</Link>}

            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
