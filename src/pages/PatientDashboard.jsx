import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"
import { useAuth } from "../context/AuthContext"

export default function PatientDashboard(){

  const { user } = useAuth()

  const [name,setName] = useState("")
  const [symptom,setSymptom] = useState("")
  const [hospitals,setHospitals] = useState([])
  const [token,setToken] = useState(null)

  useEffect(()=>{
    loadPatient()
    loadQueue()
  },[])


  async function loadPatient(){

    const { data } = await supabase
      .from("patients")
      .select("name")
      .eq("user_id", user.id)
      .single()

    if(data){
      setName(data.name || "Patient")
    }
  }


  async function loadQueue(){

    const { data } = await supabase
      .from("appointments")
      .select("token_number")
      .eq("patient_id", user.id)
      .order("created_at",{ascending:false})
      .limit(1)

    if(data && data.length > 0){
      setToken(data[0].token_number)
    }
  }


 async function searchHospitals() {

  if (!symptom) return

  const res = await fetch("/.netlify/functions/analyze-symptoms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ symptom })
  })

  const ai = await res.json()

  const specialization = ai.specialization

  setAnalysis(ai)

  const { data } = await supabase
    .from("hospital_specializations")
    .select(`
      hospitals(id,name,location)
    `)
    .eq("specialization", specialization)

  const hospitalList = data.map(h => h.hospitals)

  setHospitals(hospitalList)
}

    const { data } = await supabase
      .from("hospital_specializations")
      .select(`
        hospitals(
          id,
          name,
          location
        )
      `)
      .eq("specialization_id", symptomData.specialization_id)

    setHospitals(data.map(h=>h.hospitals))
  }


  return(

    <div className="bg-gray-100 min-h-screen p-6">


      {/* HERO */}

      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl p-6 mb-6">

        <h2 className="text-lg mb-1">
          Welcome, {name}.
        </h2>

        <h1 className="text-2xl font-bold">
          Find the Best Hospital for Your Needs
        </h1>

      </div>



      {/* SEARCH CARD */}

      <div className="bg-white shadow rounded-xl p-6 mb-8">

        <h3 className="font-semibold mb-4">
          Enter Symptoms
        </h3>

        <div className="space-y-4">

          <input
            className="border w-full p-2 rounded"
            placeholder="Chest Pain, Shortness of Breath"
            onChange={(e)=>setSymptom(e.target.value)}
          />

          <button
            onClick={searchHospitals}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            FIND HOSPITAL
          </button>

        </div>

      </div>



      {/* RECOMMENDED HOSPITALS */}

      <div className="mb-8">

        <h3 className="font-semibold mb-4">
          Recommended Hospitals
        </h3>

        <div className="space-y-4">

          {hospitals.map(h => (

            <div
              key={h.id}
              className="bg-white shadow rounded-xl p-4 flex justify-between items-center"
            >

              <div>

                <h4 className="font-semibold">
                  {h.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {h.location}
                </p>

              </div>

              <button className="bg-blue-600 text-white px-4 py-2 rounded">
                Book
              </button>

            </div>

          ))}

        </div>

      </div>



      {/* QUEUE STATUS */}

      <div>

        <h3 className="font-semibold mb-4">
          Your Queue Status
        </h3>

        <div className="bg-white shadow rounded-xl p-6 flex justify-between items-center">

          {token ? (

            <>
              <div>

                <h2 className="text-2xl font-bold">
                  Token #{token}
                </h2>

                <p className="text-gray-500">
                  Please wait for your turn
                </p>

              </div>

              <div className="text-blue-600 font-semibold">
                Active Queue
              </div>
            </>

          ) : (

            <p className="text-gray-500">
              No active appointment
            </p>

          )}

        </div>

      </div>

    </div>
  )
}