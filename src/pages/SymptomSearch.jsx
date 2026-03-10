import { useState } from "react"
import { supabase } from "../lib/supabase"

export default function SymptomSearch(){

  const [symptom,setSymptom] = useState("")
  const [hospitals,setHospitals] = useState([])

  async function searchHospitals(){

    const { data: symptomData } = await supabase
      .from("symptoms")
      .select("specialization_id")
      .ilike("name", `%${symptom}%`)
      .single()

    if(!symptomData){
      alert("Symptom not found")
      return
    }

    const { data } = await supabase
      .from("hospital_specializations")
      .select(`
        hospitals (
          id,
          name,
          location
        )
      `)
      .eq("specialization_id", symptomData.specialization_id)

    const hospitalList = data.map(item => item.hospitals)

    setHospitals(hospitalList)
  }
async function bookAppointment(hospitalId){

  const { data: { user } } = await supabase.auth.getUser()

  if(!user){
    alert("Please login first")
    return
  }

  const { data: patient } = await supabase
    .from("patients")
    .select("id")
    .eq("user_id", user.id)
    .single()

  if(!patient){
    alert("Patient record not found")
    return
  }

  // get current token count
  const { data: existingTokens } = await supabase
    .from("appointments")
    .select("token_number")
    .eq("hospital_id", hospitalId)

  const tokenNumber = (existingTokens?.length || 0) + 1

  const { error } = await supabase
    .from("appointments")
    .insert({
      patient_id: patient.id,
      hospital_id: hospitalId,
      appointment_date: new Date(),
      token_number: tokenNumber
    })

  if(error){
    alert(error.message)
  } else {
    alert(`Appointment booked! Your token number is ${tokenNumber}`)
  }
}
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Find Hospital by Symptom
      </h1>

      <div className="flex gap-4 mb-8">

        <input
          className="border p-2"
          placeholder="Enter symptom"
          onChange={(e)=>setSymptom(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white px-4"
          onClick={searchHospitals}
        >
          Search
        </button>

      </div>

      <div className="space-y-4">

        {hospitals.map(h => (
          <div key={h.id} className="border p-4">

            <h2 className="text-xl font-bold">
              {h.name}
            </h2>

            <p>{h.location}</p>
            <button
            className="mt-3 bg-green-600 text-white px-4 py-2"
            onClick={()=>bookAppointment(h.id)}
            >Book Appointment</button>
          </div>
        ))}

      </div>

    </div>
  )
}