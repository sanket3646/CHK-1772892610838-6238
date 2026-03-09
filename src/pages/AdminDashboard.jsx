import Navbar from "../components/Navbar";
import HeroBar from "../components/admin/HeroBar";
import ResourceOverview from "../components/admin/ResourceOverview";
import ResourceRequests from "../components/admin/ResourceRequests";
import InventoryUpdate from "../components/admin/InventoryUpdate";
import DoctorSchedule from "../components/admin/DoctorSchedule";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-page">

      <Navbar />

      <HeroBar />

      <div className="max-w-6xl mx-auto px-6 space-y-8 mt-8">

        <ResourceOverview />

        <ResourceRequests />

        <InventoryUpdate />

        <DoctorSchedule />

      </div>

    </div>
  );
}