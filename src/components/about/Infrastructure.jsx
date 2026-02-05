import React from "react";

const Infrastructure = () => {
  return (
    <section className="py-24 bg-[#FAFAF9] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2 block">
              Infrastructure Approach
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 mb-6">
              Globally Available, Locally Optimized
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed font-light mb-8">
              As a fully cloud-native business, LinguaCore AI operates globally
              while prioritizing the unique needs of emerging markets —
              including language diversity, cost sensitivity, and limited access
              to professional localization infrastructure.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="space-y-6">
              {[
                {
                  icon: "☁️",
                  title: "Native Cloud Infrastructure",
                  desc: "Built on enterprise cloud platforms with managed services",
                },
                {
                  icon: "🌍",
                  title: "Global Processing",
                  desc: "Multi-region deployment with distributed rendering",
                },
                {
                  icon: "🔐",
                  title: "Secure & Scalable",
                  desc: "Enterprise security standards with automatic scaling",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-4 bg-white rounded-sm border border-stone-100 shadow-sm"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h4 className="font-serif font-bold text-stone-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-stone-600 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
