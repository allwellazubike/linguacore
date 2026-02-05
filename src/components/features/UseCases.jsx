import React from "react";

const UseCases = () => {
  const industries = [
    {
      title: "Entertainment & Film",
      desc: "Movie dubbing, TV series localization, trailer translation, promotional content, behind-the-scenes features, global distribution.",
    },
    {
      title: "E-Learning & Education",
      desc: "Course translation, training video dubbing, educational content localization, tutorial videos, academic lectures, student resources.",
    },
    {
      title: "Corporate Training",
      desc: "Employee onboarding videos, compliance training, skill development content, leadership programs, safety training, internal communications.",
    },
    {
      title: "Marketing & Advertising",
      desc: "Product videos, brand campaigns, explainer videos, social media content, testimonial videos, promotional materials.",
    },
    {
      title: "Podcast & Audio Content",
      desc: "Podcast translation and dubbing, audiobook localization, radio content, audio guides, voice-over services.",
    },
    {
      title: "Gaming & Interactive Media",
      desc: "Game cinematics, character dialogue, tutorial videos, promotional trailers, live stream content, community videos.",
    },
    {
      title: "News & Media",
      desc: "News segment translation, documentary dubbing, interview transcription, content syndication, archive localization.",
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAF9] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2 block">
            Use Cases
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 mb-6">
            Industries We Serve
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-stone-100 rounded-sm hover:border-stone-300 transition-colors"
            >
              <h3 className="text-lg font-serif font-bold text-stone-900 mb-3">
                {ind.title}
              </h3>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                {ind.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
