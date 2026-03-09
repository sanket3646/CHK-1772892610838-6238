export default function ResourceRequests() {
  return (

    <div>

      <h2 className="text-lg font-semibold mb-4">
        Resource Requests
      </h2>

      <div className="space-y-4">

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="font-medium">Blood Request</p>
            <p className="text-sm text-gray-500">O+ needed urgently</p>
          </div>

          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Respond
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
          <div>
            <p className="font-medium">Medicine Request</p>
            <p className="text-sm text-gray-500">Paracetamol supply low</p>
          </div>

          <button className="bg-primary text-white px-4 py-2 rounded-lg">
            Respond
          </button>
        </div>

      </div>

    </div>
  );
}