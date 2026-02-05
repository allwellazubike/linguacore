import React from "react";

const PlatformOverview = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-stone-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-[0%] left-[-5%] w-[400px] h-[400px] bg-stone-100 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 mb-6">
            Built for Scale. <br /> Designed for Global Reach.
          </h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            LinguaCore provides the complete infrastructure media companies need
            to expand globally — translating, dubbing, and localizing thousands
            of hours of content without hiring voice actors or localization
            teams.
          </p>
        </div>

        {/* Overview Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group p-8 rounded-sm bg-[#FAFAF9] border border-stone-200 hover:border-stone-900/20 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a6.798 6.798 0 0 1 4.488-1.954 6.798 6.798 0 0 1 4.488 1.954m-2.244 1.954a2.25 2.25 0 0 1 1.413-3.625 2.25 2.25 0 0 1 1.413 3.625m2.244-1.954a6.798 6.798 0 0 1 2.25 4.844V21H1.5v-6.75a6.798 6.798 0 0 1 2.25-4.844m15 0a4.5 4.5 0 0 1-9 0m9 0h-9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium text-stone-900 mb-3">
              Automated Dubbing
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Generates natural-sounding voiceovers in target languages while
              preserving the original speaker's emotional tone.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 rounded-sm bg-[#FAFAF9] border border-stone-200 hover:border-stone-900/20 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium text-stone-900 mb-3">
              Multi-Language Support
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Support for 20+ languages including English, Spanish, Mandarin,
              Hindi, Arabic, and more.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 rounded-sm bg-[#FAFAF9] border border-stone-200 hover:border-stone-900/20 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 22.5 12 13.5H3.75z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-medium text-stone-900 mb-3">
              Instant Scalability
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Process thousands of hours of content simultaneously with our
              cloud-native batch processing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
