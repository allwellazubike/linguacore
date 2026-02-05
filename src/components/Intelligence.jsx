import React from "react";

const Intelligence = () => {
  return (
    <section className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[800px] bg-indigo-900/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
              Platform Intelligence
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Infrastructure That Transcribes, Translates, and Transforms
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
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
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-green-400 mt-1 shrink-0"
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

            <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
              Get Started
            </button>
          </div>

          {/* Visualization */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl bg-gray-900 border border-white/10 p-6 shadow-2xl glass-panel">
              {/* Abstract Visualization of Processing Pipeline */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    1
                  </div>
                  <div>
                    <div className="text-white font-medium">Input Source</div>
                    <div className="text-xs text-gray-500">
                      Video.mp4 • English • 1.2GB
                    </div>
                  </div>
                  <div className="ml-auto text-xs text-green-400">Uploaded</div>
                </div>

                <div className="h-8 border-l border-dashed border-gray-700 ml-9"></div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent w-full h-full animate-pulse"></div>
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 relative z-10">
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
                    <div className="text-white font-medium">Processing</div>
                    <div className="text-xs text-gray-500">
                      Transcribing • Translating • Dubbing
                    </div>
                  </div>
                  <div className="ml-auto text-xs text-blue-400 font-mono">
                    45%
                  </div>
                </div>

                <div className="h-8 border-l border-dashed border-gray-700 ml-9"></div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-white/5 opacity-60">
                  <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400">
                    3
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      Output Generated
                    </div>
                    <div className="text-xs text-gray-500">
                      Ready for Download
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Background for Visualization */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl opacity-20 blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intelligence;
