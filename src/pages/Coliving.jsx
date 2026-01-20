function Coliving() {
  return (
    <section className="relative min-h-[90vh] w-full bg-zinc-950text-white overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[90vh] justify-center px-6 pt-16">
        <div className="max-w-2xl w-full text-center">
          
          {/* Section Label */}
          <span className="inline-block text-xs uppercase tracking-widest text-indigo-400 mb-4">
            Accommodation Services
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-indigo-300 to-white bg-clip-text text-transparent">
            Multiple Accommodations
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-400 text-sm md:text-lg leading-relaxed max-w-xl mx-auto">
            We currently operate multiple accommodation properties designed for
            comfort, convenience, and community living.
            This page is being prepared to showcase locations, amenities,
            and availability in detail.
          </p>

          {/* Divider */}
          <div className="mt-8 h-px w-24 bg-indigo-500/40 mx-auto" />

          {/* Status Badges */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <span className="px-6 py-2 text-sm rounded-full bg-green-500/10 text-green-400 border border-green-500/30">
              Currently Operating
            </span>

            <span className="px-6 py-2 text-sm rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 animate-pulse">
              Page Coming Soon
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Coliving;