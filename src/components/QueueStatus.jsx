export default function QueueStatus() {
  return (

    <div className="px-6 mt-8">

      <h2 className="font-semibold text-gray-700 mb-4">
        Your Queue Status
      </h2>

      <div className="bg-white shadow rounded-xl p-5 flex justify-between items-center">

        <div>
          <h3 className="text-xl font-bold">
            Token #24
          </h3>

          <p className="text-gray-500">
            Estimated Wait : <span className="text-primary font-semibold">18 mins</span>
          </p>
        </div>

        <button className="bg-primary text-white px-4 py-2 rounded-lg">
          With Dr. Sharma →
        </button>

      </div>

    </div>
  );
}