import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F0F4F8] text-[#334155] flex flex-col items-center justify-center p-8">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,66,83,0.1)] p-12 text-center border border-white/40 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#004253] via-[#ffddb3] to-[#004253]"></div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 mt-4 text-[#004253]" style={{ fontFamily: "'Manrope', sans-serif" }}>
          GENEWOW
        </h1>
        <p className="text-xl md:text-2xl font-light text-[#64748b] mb-12">
          The Living Laboratory | Social Genetic Platform
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/add-pet" className="group flex flex-col items-center justify-center bg-[#004253] text-white p-8 rounded-2xl hover:bg-[#003040] transition-all duration-300 shadow-[0_10px_20px_rgba(0,66,83,0.2)] hover:shadow-[0_15px_30px_rgba(0,66,83,0.3)] hover:-translate-y-1">
            <h2 className="text-2xl font-semibold mb-2">Register Pet</h2>
            <p className="text-white/80 font-light text-sm">Add a new companion to your lab</p>
          </Link>
          
          <div className="group flex flex-col items-center justify-center bg-white border-2 border-[#e2e8f0] text-[#004253] p-8 rounded-2xl hover:border-[#004253] transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-2">Explore Genetics</h2>
            <p className="text-[#64748b] font-light text-sm">Coming soon</p>
          </div>
        </div>
      </div>
    </main>
  );
}
