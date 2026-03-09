export default function NextPatient() {
  return (

    <div>

      <h2 className="text-lg font-semibold mb-4">
        Next Patient
      </h2>

      <div className="bg-white rounded-xl shadow p-5 flex items-center justify-between">

        <div>

          <h3 className="text-xl font-bold">
            Token #25
          </h3>

          <p className="text-gray-500">
            Patient: Rahul Sharma
          </p>

          <p className="text-gray-500">
            Condition: Chest Pain
          </p>

        </div>

        <div className="flex items-center gap-4">

          <div>
            <p className="font-medium">Dr. Mehta</p>
            <p className="text-sm text-gray-500">Cardiology</p>
          </div>

          <img
            src="https://i.pravatar.cc/60"
            className="w-14 h-14 rounded-full"
          />

        </div>

      </div>

    </div>
  );
}