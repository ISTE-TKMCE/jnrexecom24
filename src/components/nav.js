export default function Navbar() {
  return (
    <div className="overflow-hidden grid grid-cols-2 md:mx-64 md:justify-items-center bg-transparent">
      <div className="font-montserrat mt-7 ml-5 font-bold">
        <h1 className="text-6xl">ISTE</h1>
        <h2 className="text-2xl">TKMCE</h2>
      </div>
      <img
        src="logo.png"
        className="opacity-30 w-56 relative left-16"
        style={{
          animation: "spin-slow 10s linear infinite",
        }}
      />
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
