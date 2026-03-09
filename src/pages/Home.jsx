import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HospitalList from "../components/HospitalList";
import QueueStatus from "../components/QueueStatus";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar/>

      <Hero/>

      <HospitalList/>

      <QueueStatus/>

    </div>
  );
}