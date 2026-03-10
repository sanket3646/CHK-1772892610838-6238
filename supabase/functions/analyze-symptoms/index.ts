import { serve } from "https://deno.land/std/http/server.ts"

serve(async (req) => {

  const { symptom } = await req.json()

  const response = await fetch("https://api.openai.com/v1/chat/completions",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${Deno.env.get("OPENAI_API_KEY")}`
    },
    body:JSON.stringify({
      model:"gpt-4.1-mini",
      messages:[
        {
          role:"system",
          content:"You are a medical triage assistant. Return only JSON."
        },
        {
          role:"user",
          content:`Patient symptom: ${symptom}.
Return JSON with:
specialization
possible_conditions`
        }
      ]
    })
  })

  const data = await response.json()

  return new Response(JSON.stringify(data))
})