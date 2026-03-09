import { Calendar, Users } from "lucide-react";

export default function DoctorStats() {
  return (

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
        <Calendar className="text-primary" size={32}/>
        <div>
          <p className="text-gray-500 text-sm">Today's Appointments</p>
          <h2 className="text-2xl font-bold">18</h2>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
        <Users className="text-primary" size={32}/>
        <div>
          <p className="text-gray-500 text-sm">Current Queue</p>
          <h2 className="text-2xl font-bold">7</h2>
        </div>
      </div>

    </div>
  );
}