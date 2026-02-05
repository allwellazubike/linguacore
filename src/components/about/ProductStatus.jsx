import React from "react";

const ProductStatus = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2 block">
              Product Status
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 mb-6">
              Current Development Stage
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed font-light mb-8">
              LinguaCore AI is currently in early-stage development with active
              pilot deployments. We are processing 500+ hours of content weekly
              and supporting 20 languages with active quality improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-serif font-bold text-stone-900 border-b border-stone-200 pb-2">
                Platform Status
              </h3>
              <ul className="space-y-2 text-sm text-stone-600 font-light">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Core API infrastructure: Production-ready
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  Speech-to-text models: Active development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Translation engine: Beta testing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  Voice synthesis: Active improvement
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  Lip-sync technology: Alpha testing
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif font-bold text-stone-900 border-b border-stone-200 pb-2">
                Roadmap
              </h3>
              <ul className="space-y-2 text-sm text-stone-600 font-light">
                {[
                  "Expanding language coverage to 40+ languages",
                  "Advanced voice cloning with speaker preservation",
                  "Real-time live dubbing capabilities",
                  "Enhanced lip-sync accuracy",
                  "Additional media format support",
                  "Enterprise collaboration features",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-stone-300">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-stone-900 text-white rounded-sm p-12 md:p-20 text-center relative overflow-hidden">
          {/* Grain Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-multiply"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-6">
              Ready to build the future of content?
            </h2>
            <p className="text-stone-300 text-lg mb-10 font-light">
              Join our early customers and get early access to AI localization
              infrastructure built for global scale.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-stone-900 font-bold hover:bg-stone-100 transition-colors rounded-sm">
                Get Started
              </button>
              <button className="px-8 py-4 bg-transparent border border-stone-700 text-white font-medium hover:bg-stone-800 transition-colors rounded-sm">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductStatus;
