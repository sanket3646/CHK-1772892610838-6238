export default function PatientQueue() {

  const patients = [
    {token: 26, name: "Amit Singh", disease: "Fever"},
    {token: 27, name: "Riya Patel", disease: "Headache"},
    {token: 28, name: "Vikas Kumar", disease: "Chest Pain"}
  ];

  return (

    <div>

      <h2 className="text-lg font-semibold mb-4">
        Patient Queue
      </h2>

      <div className="space-y-4">

        {patients.map((p,i) => (

          <div
            key={i}
            className="bg-white rounded-xl shadow p-5 flex justify-between items-center"
          >

            <div>

              <h3 className="font-semibold">
                Token #{p.token}
              </h3>

              <p className="text-gray-500 text-sm">
                {p.name} • {p.disease}
              </p>

            </div>

            <button className="bg-primary text-white px-4 py-2 rounded-lg">
              View Details
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}