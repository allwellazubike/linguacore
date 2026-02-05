import React from "react";
import { Server, Zap, Globe } from "lucide-react";

const InfraHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-stone-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-100/50 rounded-l-[100px] transform translate-x-20" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full filter blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
            <Server className="w-4 h-4" />
            <span>Cloud-Native Infrastructure</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-stone-900 mb-6 leading-tight">
            Cloud-Native by Design
            <br />
            <span className="text-orange-500 italic">
              Engineered for Media Processing at Scale
            </span>
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            LinguaCore AI is built entirely on modern cloud infrastructure
            designed to handle extreme media processing workloads, ensure high
            reliability, and optimize for cost-efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mb-6 text-stone-900">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-medium text-stone-900 mb-3">
              High Performance
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Prioritizing processing speed and quality output for terabytes of
              media content monthly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mb-6 text-stone-900">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-medium text-stone-900 mb-3">
              Global Scale
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Distributed architecture delivering consistent performance from
              single videos to 10,000-hour libraries.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center mb-6 text-stone-900">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif font-medium text-stone-900 mb-3">
              Cloud Native
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Focusing engineering resources on AI innovation rather than
              managing physical servers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfraHero;
