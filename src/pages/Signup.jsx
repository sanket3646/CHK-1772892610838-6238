import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabase"

export default function Signup(){

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleSignup(e){
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password
    })

    setLoading(false)

    if(error){
      alert(error.message)
      return
    }

    alert("Signup successful")
    navigate("/login")
  }

  return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-lg shadow-md w-96">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">

          <div>
            <label className="block text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="border p-2 w-full rounded"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              required
              className="border p-2 w-full rounded"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            {loading ? "Creating account..." : "Signup"}
          </button>

        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>

      </div>

    </div>
  )
}