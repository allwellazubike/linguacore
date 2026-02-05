import React from "react";

const RoadmapItem = ({ year, title, items }) => (
  <div className="relative pl-8 pb-12 last:pb-0 border-l border-stone-200 last:border-0 hover:border-orange-200 transition-colors group">
    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-white border-4 border-stone-200 group-hover:border-orange-500 transition-colors" />
    <span className="text-sm font-medium text-orange-600 mb-2 block">
      {year}
    </span>
    <h3 className="text-xl font-serif font-medium text-stone-900 mb-4">
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-stone-600">
          <div className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Roadmap = () => {
  const phases = [
    {
      year: "2026 Q2-Q3",
      title: "Real-Time & Edge Innovation",
      items: [
        "Real-time live dubbing capabilities",
        "Enhanced voice cloning technology",
        "Advanced lip-sync accuracy improvements",
        "Edge processing for ultra-low latency",
        "Expanded support to 40+ languages",
      ],
    },
    {
      year: "2026 Q4",
      title: "Multi-Modal Intelligence",
      items: [
        "Multi-modal AI (Visual + Audio localization)",
        "Automated subtitle generation & formatting",
        "Enhanced quality assurance automation",
        "Regional processing nodes in Africa & Asia",
      ],
    },
    {
      year: "2027",
      title: "The Future of Content",
      items: [
        "Real-time collaboration features",
        "AI Director Mode (automated camera adjustment)",
        "Deep emotion preservation in dubbing",
        "Custom voice training platform",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          <div className="md:w-1/3 sticky top-24">
            <span className="text-orange-600 font-medium tracking-wider text-sm uppercase mb-3 block">
              Future Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-6">
              Continuous Innovation
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Our roadmap is driven by the evolving needs of global content
              creators, pushing the boundaries of what's possible in AI media
              processing.
            </p>
          </div>

          <div className="md:w-2/3 max-w-2xl">
            {phases.map((phase, idx) => (
              <RoadmapItem key={idx} {...phase} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
