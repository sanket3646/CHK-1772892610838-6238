import React from "react"
import { Link } from "react-router-dom"
import { Heart, Stethoscope, ShieldCheck, Lock, Zap, ShieldPlus } from "lucide-react"

export default function Home() {

  const portals = [
    {
      title: "Patient Portal",
      description: "Search hospitals, book appointments & track queue status.",
      icon: Heart,
      path: "/PatientPortal",
      color: "bg-blue-600"
    },
    {
      title: "Doctor Dashboard",
      description: "Manage patient queue and update availability.",
      icon: Stethoscope,
      path: "/DoctorDashboard",
      color: "bg-teal-600"
    },
    {
      title: "Admin Dashboard",
      description: "Monitor hospitals and manage resources.",
      icon: ShieldCheck,
      path: "/AdminDashboard",
      color: "bg-orange-500"
    }
  ]

  return (
    <div className="space-y-10">

      {/* HERO */}
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-900 p-10 text-white">
        <div className="max-w-2xl">

          <div className="flex items-center gap-2 mb-4 text-sm bg-white/20 w-fit px-3 py-1 rounded-full">
            <ShieldPlus className="w-4 h-4"/>
            Government Healthcare Initiative
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Smart Government Hospital Network
          </h1>

          <p className="text-blue-100">
            A platform to search government hospitals, reduce waiting time,
            and book tokens digitally.
          </p>

        </div>
      </div>


      {/* SIMPLE STATS */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-blue-600">120+</h2>
          <p className="text-sm text-slate-500">Hospitals Connected</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-blue-600">350+</h2>
          <p className="text-sm text-slate-500">Doctors Available</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-blue-600">10k+</h2>
          <p className="text-sm text-slate-500">Patients Served</p>
        </div>
      </div>


      {/* PORTALS */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          Select Your Portal
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {portals.map((portal) => {
            const Icon = portal.icon

            return (
              <Link
                key={portal.title}
                to={portal.path}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg text-white mb-4 ${portal.color}`}>
                  <Icon className="w-6 h-6"/>
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {portal.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {portal.description}
                </p>
              </Link>
            )
          })}

        </div>
      </div>


      {/* TRUST BAR */}
      <div className="flex justify-center gap-8 text-sm text-slate-400 pt-6">
        <span className="flex items-center gap-2">
          <Lock className="w-4 h-4"/> Secure
        </span>

        <span className="flex items-center gap-2">
          <Zap className="w-4 h-4"/> Fast
        </span>

        <span className="flex items-center gap-2">
          <Heart className="w-4 h-4"/> Reliable
        </span>
      </div>

    </div>
  )
}