import SymptomForm from "./SymptomForm";

export default function Hero() {
  return (
    <div className="relative overflow-hidden px-6 py-10 text-white bg-gradient-to-br from-blue-500 to-blue-700">

      {/* background plus pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 text-6xl font-bold">+</div>
        <div className="absolute top-32 right-24 text-5xl font-bold">+</div>
        <div className="absolute bottom-10 right-16 text-6xl font-bold">+</div>
      </div>

      {/* content */}
      <div className="relative z-10">
        <h2 className="text-lg opacity-90">
          Welcome, Rohan.
        </h2>

        <h1 className="text-2xl font-bold mt-2 max-w-lg">
          Find the Best Hospital for Your Needs
        </h1>

        <div className="mt-6">
          <SymptomForm />
        </div>
      </div>

    </div>
  );
}