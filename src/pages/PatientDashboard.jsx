import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../context/AuthContext";

export default function PatientDashboard() {
  const { user } = useAuth();

  const [name, setName] = useState("");
  const [symptom, setSymptom] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [token, setToken] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loadingAI, setLoadingAI] = useState(false);

  useEffect(() => {
    loadPatient();
    loadQueue();
  }, []);

  async function loadPatient() {
    const { data } = await supabase
      .from("patients")
      .select("name")
      .eq("user_id", user.id)
      .single();

    if (data) {
      setName(data.name || "Patient");
    }
  }

  async function loadQueue() {
    const { data } = await supabase
      .from("appointments")
      .select("token_number")
      .eq("patient_id", user.id)
      .order("created_at", { ascending: false })
      .limit(1);

    if (data && data.length > 0) {
      setToken(data[0].token_number);
    }
  }

  async function searchHospitals() {
    if (!symptom) return;

    setLoadingAI(true);

    const res = await fetch(
      "https://YOUR_SUPABASE_PROJECT.functions.supabase.co/analyze-symptoms",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptom }),
      },
    );

    const ai = await res.json();

    setAnalysis(ai);

    const specialization = ai.specialization;

    const { data } = await supabase
      .from("hospital_specializations")
      .select(
        `
      hospitals(id,name,location)
    `,
      )
      .eq("specialization", specialization);

    setHospitals(data.map((h) => h.hospitals));

    setLoadingAI(false);
  }
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* HERO */}

      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl p-6 mb-6">
        <h2 className="text-lg mb-1">Welcome, {name}.</h2>

        <h1 className="text-2xl font-bold">
          Find the Best Hospital for Your Needs
        </h1>
      </div>

      {/* SEARCH CARD */}

      <div className="bg-white shadow rounded-xl p-6 mb-8">
        <h3 className="font-semibold mb-4">Enter Symptoms</h3>

        <div className="space-y-4">
          <input
            className="border w-full p-2 rounded"
            placeholder="Chest Pain, Shortness of Breath"
            onChange={(e) => setSymptom(e.target.value)}
          />

          <button
            onClick={searchHospitals}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            FIND HOSPITAL
          </button>
          {loadingAI && (
            <p className="text-sm text-gray-500 mt-3">Analyzing symptoms...</p>
          )}
        </div>
      </div>
      {analysis && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
          <h3 className="font-semibold mb-2">AI Symptom Analysis</h3>

          <p className="text-sm mb-3">
            Recommended Specialist:
            <span className="font-semibold ml-1">
              {analysis.specialization}
            </span>
          </p>

          <p className="text-sm mb-2">Possible Causes:</p>

          <ul className="list-disc list-inside text-sm text-gray-700 mb-3">
            {analysis.possible_conditions?.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>

          <p className="text-xs text-gray-500">
            This AI analysis is for informational purposes only and is not a
            medical diagnosis. Please consult a healthcare professional.
          </p>
        </div>
      )}
      {/* RECOMMENDED HOSPITALS */}

      <div
        key={h.id}
        className="bg-white shadow rounded-xl p-5 flex justify-between items-center hover:shadow-md transition"
      >
        <div>
          <h4 className="font-semibold text-lg">{h.name}</h4>

          <p className="text-sm text-gray-500">{h.location}</p>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Book Appointment
        </button>
      </div>

      {/* QUEUE STATUS */}

      <div>
        <h3 className="font-semibold mb-4">Your Queue Status</h3>

        <div className="bg-white shadow rounded-xl p-6 flex justify-between items-center">
          {token ? (
            <>
              <div>
                <h2 className="text-2xl font-bold">Token #{token}</h2>

                <p className="text-gray-500">Please wait for your turn</p>
              </div>

              <div className="text-blue-600 font-semibold">Active Queue</div>
            </>
          ) : (
            <p className="text-gray-500">No active appointment</p>
          )}
        </div>
      </div>
    </div>
  );
}
