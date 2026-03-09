export default function SymptomForm() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5 max-w-md">

      <p className="text-gray-700 font-medium mb-3">
        Enter Symptoms
      </p>

      <select
        defaultValue=""
        className="w-full border border-gray-300 rounded-lg p-3 mb-3 text-gray-700"
      >
        <option value="" disabled>
          Select your symptoms
        </option>
        <option>Chest Pain</option>
        <option>Shortness of Breath</option>
        <option>Fever</option>
        <option>Headache</option>
      </select>

      <select
        defaultValue=""
        className="w-full border border-gray-300 rounded-lg p-3 mb-4 text-gray-700"
      >
        <option value="" disabled>
          Select your location
        </option>
        <option>Pune</option>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Bangalore</option>
      </select>

      <button className="w-full bg-primary hover:bg-primaryDark text-white font-semibold py-3 rounded-lg transition">
        FIND HOSPITAL
      </button>

    </div>
  );
}