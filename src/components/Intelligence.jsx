import React from "react";

const Intelligence = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[800px] bg-stone-50 rounded-full blur-[120px] -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-bold tracking-widest uppercase mb-8">
              Platform Intelligence
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 mb-6 leading-tight max-w-lg">
              Infrastructure That Transcribes, Translates, and Transforms
            </h2>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed font-light">
              Our AI is not a simple translation tool — it is a complete media
              localization infrastructure layer built for production-scale
              content operations. From automatic speech recognition to
              context-aware translation and natural voice synthesis, LinguaCore
              AI powers global content expansion at unprecedented speed.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Automatic speech-to-text transcription (95%+ accuracy)",
                "Context-aware translation preserving tone",
                "Neural voice synthesis in 20+ languages",
                "Automatic lip-sync and audio-video alignment",
                "Batch processing of up to 1,000 hours simultaneously",
                "99.9% platform uptime SLA",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-stone-700 font-light text-sm md:text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-stone-900 mt-0.5 shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <button className="px-8 py-3 rounded-sm bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors shadow-xl shadow-stone-900/10">
              Get Started
            </button>
          </div>

          {/* Visualization */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-xl bg-[#FAFAF9] border border-stone-200 p-6 shadow-2xl shadow-stone-200/50">
              {/* Abstract Visualization of Processing Pipeline */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white border border-stone-100 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 border border-stone-200">
                    1
                  </div>
                  <div>
                    <div className="text-stone-900 font-medium text-sm">
                      Input Source
                    </div>
                    <div className="text-xs text-stone-500">
                      Video.mp4 • English • 1.2GB
                    </div>
                  </div>
                  <div className="ml-auto text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded">
                    Uploaded
                  </div>
                </div>

                <div className="h-8 border-l border-dashed border-stone-300 ml-9"></div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-white border border-stone-200 shadow-lg ring-1 ring-stone-900/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-stone-50/50 w-full h-full animate-pulse"></div>
                  <div className="w-10 h-10 rounded-full bg-stone-900 text-white flex items-center justify-center relative z-10">
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <div className="text-stone-900 font-medium text-sm">
                      Processing
                    </div>
                    <div className="text-xs text-stone-500">
                      Transcribing • Translating • Dubbing
                    </div>
                  </div>
                  <div className="ml-auto text-xs text-stone-900 font-mono font-bold">
                    45%
                  </div>
                </div>

                <div className="h-8 border-l border-dashed border-stone-300 ml-9"></div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-white border border-stone-100 shadow-sm opacity-60">
                  <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 border border-stone-200">
                    3
                  </div>
                  <div>
                    <div className="text-stone-400 font-medium text-sm">
                      Output Generated
                    </div>
                    <div className="text-xs text-stone-400">
                      Ready for Download
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background for Visualization */}
            <div className="absolute -inset-4 bg-stone-200/50 rounded-3xl -z-10 blur-xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intelligence;
