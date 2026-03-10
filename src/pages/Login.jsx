import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

async function handleLogin(e) {
  e.preventDefault()
  setLoading(true)

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  setLoading(false)

  if (error) {
    alert(error.message)
    return
  }

  navigate("/")
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              className="border p-2 w-full rounded"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              required
              className="border p-2 w-full rounded"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
