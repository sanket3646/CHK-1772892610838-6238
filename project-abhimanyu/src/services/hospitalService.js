import { supabase } from "./supabaseClient"

export async function findHospitalsBySpecialization(specialization){

  const { data, error } = await supabase
    .from("hospital_specializations")
    .select(`
      hospitals(
        id,
        name,
        location
      )
    `)
    .eq("specialization", specialization)

  if(error) throw error

  return data.map(h => h.hospitals)
}