import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function ProtectedRoute({ children, role }) {

  const { user, role: userRole, loading } = useAuth()

  if(loading) return <div className="p-10">Loading...</div>

  if(!user) return <Navigate to="/login" />

  if(role && role !== userRole) return <Navigate to="/" />

  return children
}