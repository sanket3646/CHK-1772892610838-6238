import HospitalCard from "./HospitalCard";

export default function HospitalList() {

  const hospitals = [
    {
      name: "City Hospital",
      dept: "Cardiology Dept",
      distance: "2.5",
      wait: "15"
    },
    {
      name: "Metro Hospital",
      dept: "General Medicine",
      distance: "3.8",
      wait: "25"
    }
  ];

  return (

    <div className="px-6 mt-8">

      <h2 className="font-semibold text-gray-700 mb-4">
        Recommended Hospitals
      </h2>

      <div className="space-y-4">
        {hospitals.map((h, i) => (
          <HospitalCard key={i} {...h}/>
        ))}
      </div>

    </div>
  );
}