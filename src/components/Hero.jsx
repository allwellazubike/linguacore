import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#FAFAF9]">
      {/* subtle grain texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* left content */}
          <div className="lg:col-span-8">
            <div className="inline-block border-b border-stone-900 pb-1 mb-10">
              <span className="text-xs font-bold tracking-widest uppercase text-stone-900">
                The New Standard in Localization
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-stone-900 leading-[0.9] mb-8 tracking-tight">
              Global Content. <br />
              <i className="font-serif font-light text-stone-500">
                Local Voices.
              </i>
            </h1>

            <p className="text-xl md:text-2xl text-stone-600 max-w-2xl leading-relaxed mb-12 font-light text-balance">
              LinguaCore provides the complete infrastructure to automatically
              translate, dub, and localize media at scale.
              <span className="block mt-4 text-stone-900 font-normal">
                No studios. No actors. Just fully automated.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-5">
              <button className="px-8 py-4 bg-stone-900 text-white font-medium text-lg hover:bg-stone-800 transition-colors rounded-sm shadow-xl shadow-stone-900/10">
                Start Building
              </button>
              <button className="px-8 py-4 bg-transparent border border-stone-300 text-stone-900 font-medium text-lg hover:border-stone-900 transition-colors rounded-sm">
                Read Documentation
              </button>
            </div>
          </div>

          {/* right content */}
          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="aspect-[3/4] border border-stone-200 bg-white shadow-2xl p-8 relative rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
              <div className="absolute top-0 right-0 p-4">
                <svg
                  className="w-8 h-8 text-stone-900"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>

              <div className="h-full flex flex-col justify-end">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-full border border-stone-900 flex items-center justify-center text-xl font-serif">
                    en
                  </div>
                  <div className="h-px bg-stone-200 w-full"></div>
                  <div className="w-12 h-12 rounded-full bg-stone-900 text-white flex items-center justify-center text-xl font-serif">
                    fr
                  </div>
                  <div className="h-px bg-stone-200 w-full"></div>
                  <div className="w-12 h-12 rounded-full border border-stone-900 flex items-center justify-center text-xl font-serif">
                    jp
                  </div>
                </div>
                <div className="mt-12">
                  <p className="font-serif text-3xl text-stone-900 leading-none">
                    95%
                  </p>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mt-2">
                    Accuracy Rate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
