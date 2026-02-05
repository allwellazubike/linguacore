import React from "react";

const CaseStudy = () => {
  return (
    <section className="py-24 bg-[#FAFAF9] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-sm border border-stone-200 overflow-hidden shadow-xl shadow-stone-200/50">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 p-12 bg-stone-900 text-white flex flex-col justify-center">
              <span className="text-xs font-bold tracking-widest uppercase text-stone-400 mb-4">
                Customer Success Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
                VidLearn Africa
              </h2>
              <p className="text-stone-300 text-lg mb-8 font-light italic">
                "LinguaCore AI transformed our business model. What was
                previously economically impossible — reaching students in their
                native languages — is now our default workflow."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone-700 rounded-full flex items-center justify-center font-bold font-serif text-xl">
                  K
                </div>
                <div>
                  <h4 className="font-bold">Dr. Kwame Mensah</h4>
                  <p className="text-sm text-stone-400 font-light">
                    CEO & Founder, VidLearn
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 p-12">
              <div className="mb-8">
                <h3 className="font-bold text-stone-900 mb-2 uppercase tracking-wide text-sm">
                  The Challenge
                </h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  VidLearn produces 100+ hours of educational content monthly
                  but was limited to English. Professional dubbing
                  ($400-600/min) made expansion impossible, excluding 65% of
                  their target students.
                </p>
              </div>

              <div className="mb-8 pl-6 border-l-4 border-stone-200">
                <h3 className="font-bold text-stone-900 mb-2 uppercase tracking-wide text-sm">
                  The Solution
                </h3>
                <p className="text-stone-600 font-light leading-relaxed">
                  Deployed LinguaCore AI's batch processing API to automatedly
                  dub entire course libraries into Hausa, Yoruba, Swahili, and
                  French overnight.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-stone-900 mb-4 uppercase tracking-wide text-sm">
                  Key Results
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Processed 500 hours in 3 weeks",
                    "Cost reduced by 98.4% ($500 -> $8)",
                    "Student enrollment increased 380%",
                    "Completion rates improved 45%",
                  ].map((result, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-stone-700 font-medium bg-[#FAFAF9] p-3 rounded-sm border border-stone-100"
                    >
                      <span className="text-green-600 font-bold">✓</span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
