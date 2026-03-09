import { Bed, Droplet, Pill } from "lucide-react";

export default function ResourceOverview() {
  return (

    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
        <Bed className="text-primary" size={32}/>
        <div>
          <p className="text-gray-500 text-sm">ICU Beds Available</p>
          <h2 className="text-2xl font-bold">12</h2>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
        <Droplet className="text-red-500" size={32}/>
        <div>
          <p className="text-gray-500 text-sm">Blood Units</p>
          <h2 className="text-2xl font-bold">48</h2>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
        <Pill className="text-primary" size={32}/>
        <div>
          <p className="text-gray-500 text-sm">Medicine Stock</p>
          <h2 className="text-2xl font-bold">320</h2>
        </div>
      </div>

    </div>
  );
}