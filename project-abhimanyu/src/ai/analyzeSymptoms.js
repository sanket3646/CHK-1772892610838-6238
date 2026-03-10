export async function analyzeSymptoms(symptom) {

  const response = await fetch("/.netlify/functions/analyze-symptoms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ symptom })
  })

  return await response.json()
}