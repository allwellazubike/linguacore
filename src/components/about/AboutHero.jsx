import React from "react";

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#FAFAF9]">
      {/* Subtle Grain Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block border-b border-stone-900 pb-1 mb-8">
              <span className="text-xs font-bold tracking-widest uppercase text-stone-900">
                Revolutionizing Media Localization
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-stone-900 leading-[1.1] mb-8 tracking-tight">
              Built for Scale. <br />
              <i className="font-serif font-light text-stone-500">
                Built for Language Diversity.
              </i>
            </h1>
            <p className="text-xl text-stone-600 leading-relaxed mb-8 font-light">
              LinguaCore is a digital-native, infrastructure-first startup
              building the AI backbone for automated media localization,
              dubbing, and multilingual content expansion.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-stone-900 uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
                AI-First
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
                Media-Native
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
                Cloud-Scale
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-4/3 bg-stone-200 rounded-sm overflow-hidden relative shadow-2xl shadow-stone-900/10">
              {/* Abstract Representation of Workflow since we don't have the exact image */}
              <div className="absolute inset-0 bg-stone-100 flex items-center justify-center">
                <div className="text-stone-300 text-6xl font-serif opacity-20 transform -rotate-12">
                  Workflow
                </div>
                {/* Decorative elements to simulate the dashboard look */}
                <div className="absolute top-10 left-10 right-10 bottom-10 border border-stone-300 rounded opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-stone-200 rounded-full blur-3xl opacity-50"></div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-6 shadow-xl border border-stone-100 max-w-xs z-20 hidden md:block">
              <p className="font-serif text-lg italic text-stone-800 mb-2">
                "Every voice deserves to be heard — in every language."
              </p>
              <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-stone-400 mt-4 border-t border-stone-100 pt-4">
                <span>Trust</span>
                <span>Security</span>
                <span>Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
