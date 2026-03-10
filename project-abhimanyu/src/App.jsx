import { analyzeSymptoms } from "./ai/analyzeSymptoms"
import { findHospitalsBySpecialization } from "./services/hospitalService"

async function test(){

  const ai = await analyzeSymptoms("sharp chest pain")

  console.log("AI:", ai)

  const hospitals = await findHospitalsBySpecialization(ai.specialization)

  console.log("Hospitals:", hospitals)
}

test()