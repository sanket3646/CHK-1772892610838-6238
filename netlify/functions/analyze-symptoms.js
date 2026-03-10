export async function handler(event){

  const { symptom } = JSON.parse(event.body)

  const response = await fetch("https://api.openai.com/v1/chat/completions",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${process.env.OPENAI_API_KEY}`
    },
    body:JSON.stringify({
      model:"gpt-4.1-mini",
      messages:[
        {
          role:"system",
          content:"You are a medical triage AI. Return JSON with specialization and possible_conditions."
        },
        {
          role:"user",
          content:symptom
        }
      ],
      response_format:{ type:"json_object" }
    })
  })

  const data = await response.json()

  const ai = JSON.parse(data.choices[0].message.content)

  return{
    statusCode:200,
    body:JSON.stringify(ai)
  }
}