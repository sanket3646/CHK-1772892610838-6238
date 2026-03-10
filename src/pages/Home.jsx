import Card from "../components/Card"

export default function Home(){

  return(

    <div className="bg-gray-100 min-h-screen p-10">

      <div className="max-w-5xl mx-auto">

        <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-10 rounded-xl mb-10">

          <h1 className="text-3xl font-bold mb-2">
            AI Hospital Finder
          </h1>

          <p>
            Describe your symptoms and find the best hospital instantly.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <Card>
            <h3 className="font-semibold mb-2">
              AI Symptom Analysis
            </h3>

            <p className="text-sm text-gray-600">
              Our AI analyzes symptoms to recommend the correct specialist.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold mb-2">
              Smart Hospital Search
            </h3>

            <p className="text-sm text-gray-600">
              Find hospitals with the right equipment and specialists.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold mb-2">
              Queue Token System
            </h3>

            <p className="text-sm text-gray-600">
              Book appointments and avoid waiting lines.
            </p>
          </Card>

        </div>

      </div>

    </div>

  )
}