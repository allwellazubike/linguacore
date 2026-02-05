import React from "react";

const Mission = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4 block">
              Our Core Purpose
            </span>
            <h2 className="text-4xl font-serif font-medium text-stone-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed font-light">
              To provide scalable, AI-powered media localization infrastructure
              that enables content creators to reach global audiences
              efficiently across languages and cultures, eliminating cost
              barriers and time constraints that limit multilingual content
              production.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Language-Inclusive",
                description:
                  "Built to support regional languages, dialects, and cultural nuances from day one, recognizing that content localization is not just translation but cultural adaptation and voice authenticity.",
              },
              {
                title: "Production-Ready",
                description:
                  "Designed for high-volume media processing, batch operations, continuous content pipelines, and real-time quality monitoring with professional-grade output quality.",
              },
              {
                title: "AI-Driven",
                description:
                  "Powered by advanced speech recognition, neural machine translation, voice synthesis, and lip-sync technologies optimized for diverse content types and linguistic patterns.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#FAFAF9] rounded-sm border border-stone-100 hover:border-stone-900/10 transition-colors"
              >
                <h3 className="text-xl font-serif font-medium text-stone-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
