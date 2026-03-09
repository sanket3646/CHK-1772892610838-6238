export default function HospitalCard({name, dept, distance, wait}) {
  return (

    <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">

      <div>

        <h3 className="font-semibold text-gray-800">
          {name}
        </h3>

        <p className="text-sm text-gray-500">
          {dept} • {distance} km
        </p>

      </div>

      <span className="text-green-600 font-medium">
        Wait: {wait} mins
      </span>

    </div>
  );
}