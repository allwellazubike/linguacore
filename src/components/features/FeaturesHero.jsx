import React from "react";

const FeaturesHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#FAFAF9]">
      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block border-b border-stone-900 pb-1 mb-6">
          <span className="text-xs font-bold tracking-widest uppercase text-stone-900">
            AI Media Localization Infrastructure
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-medium text-stone-900 leading-[1.1] mb-8 tracking-tight max-w-4xl mx-auto">
          Everything You Need. <br />
          <i className="font-serif font-light text-stone-500">One Platform.</i>
        </h1>
        <p className="text-xl text-stone-600 leading-relaxed mb-10 font-light max-w-2xl mx-auto">
          LinguaCore AI provides the complete AI infrastructure stack for modern
          media localization, dubbing, and multilingual content production at
          global scale.
        </p>
        <div>
          <button className="px-8 py-4 bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors rounded-sm shadow-xl shadow-stone-900/10">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;
