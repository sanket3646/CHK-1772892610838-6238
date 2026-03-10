import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ children, role }) {

  const [authorized, setAuthorized] = useState(null)

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser(){

    const { data: { user } } = await supabase.auth.getUser()

    if(!user){
      setAuthorized(false)
      return
    }

    const { data } = await supabase
      .from("users")
      .select("role")
      .eq("id", user.id)
      .single()

    setAuthorized(data.role === role)
  }

  if(authorized === null) return <div>Loading...</div>

  if(!authorized) return <Navigate to="/login" />

  return children
}