import Navbar from "../components/Navbar";
import DoctorHeroBar from "../components/doctor/DoctorHeroBar";
import DoctorStats from "../components/doctor/DoctorStats";
import NextPatient from "../components/doctor/NextPatient";
import PatientQueue from "../components/doctor/PatientQueue";
import MySchedule from "../components/doctor/MySchedule";

export default function DoctorDashboard() {
  return (
    <div className="min-h-screen bg-page">

      <Navbar />

      <DoctorHeroBar />

      <div className="max-w-6xl mx-auto px-6 space-y-8 mt-8">

        <DoctorStats />

        <NextPatient />

        <PatientQueue />

        <MySchedule />

      </div>

    </div>
  );
}