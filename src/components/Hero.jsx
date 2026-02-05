import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-[110vh] flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-[1]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-xs text-blue-200 font-medium tracking-wide">
            AI-POWERED MEDIA LOCALIZATION
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-100">
          Global Content. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 text-glow">
            Local Voices.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Translation. Dubbing. Localization. Seamlessly.{" "}
          <br className="hidden md:block" />
          <span className="text-lg md:text-xl opacity-80 mt-2 block">
            LinguaCore AI is an early-stage, cloud-native platform enabling
            creators and businesses to automatically translate and dub content
            for global markets.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all transform hover:scale-105 active:scale-95 border border-white/10">
            Get Started Free
          </button>
          <button className="px-8 py-4 rounded-full bg-white/5 text-white font-semibold text-lg hover:bg-white/10 transition-all border border-white/10 backdrop-blur-md flex items-center gap-2 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
            View Demo
          </button>
        </div>

        {/* Decorative Elements / Dashboard Mockup Preview */}
        <div className="mt-20 relative mx-auto max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10 w-full h-full"></div>
          <div className="rounded-xl border border-white/10 bg-gray-900/50 backdrop-blur-sm p-2 shadow-2xl">
            <div className="rounded-lg overflow-hidden bg-gray-950 aspect-[16/9] relative flex items-center justify-center border border-white/5">
              {/* Abstract representation of UI */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 mx-auto flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-blue-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">
                  Interactive Demo Loading...
                </p>
              </div>

              {/* Simulated Waveform Overlay */}
              <div className="absolute bottom-8 left-8 right-8 h-12 flex items-center gap-1 opacity-50">
                {[...Array(60)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-blue-500 rounded-full"
                    style={{ height: `${Math.random() * 100}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
