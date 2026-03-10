import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

const AuthContext = createContext()

export function AuthProvider({ children }) {

  const [user,setUser] = useState(null)
  const [role,setRole] = useState(null)
  const [loading,setLoading] = useState(true)

  useEffect(()=>{

    getUser()

    const { data: listener } = supabase.auth.onAuthStateChange(()=>{
      getUser()
    })

    return () => listener.subscription.unsubscribe()

  },[])

  async function getUser(){

    const { data: { user } } = await supabase.auth.getUser()

    if(!user){
      setUser(null)
      setRole(null)
      setLoading(false)
      return
    }

    setUser(user)

    const { data } = await supabase
      .from("users")
      .select("role")
      .eq("id", user.id)
      .single()

    if(data){
      setRole(data.role)
    }

    setLoading(false)
  }

  return (
    <AuthContext.Provider value={{user,role,loading}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}