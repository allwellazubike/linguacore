import React from "react";

const SystemCharacteristics = () => {
  const characteristics = [
    {
      icon: "⚡",
      title: "Reliability",
      points: [
        "99.9% uptime SLA",
        "Automatic failover mechanisms",
        "Multi-zone redundancy",
        "Checkpointing for long jobs",
      ],
    },
    {
      icon: "🚀",
      title: "Performance",
      points: [
        "Parallel processing infrastructure",
        "GPU-accelerated synthesis",
        "Distributed rendering",
        "Global CDN delivery",
      ],
    },
    {
      icon: "📈",
      title: "Scalability",
      points: [
        "Horizontal scaling architecture",
        "Queue-based job processing",
        "Elastic compute resources",
        "Storage auto-scaling",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2 block">
            Infrastructure Characteristics
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 mb-6">
            Built for Continuous Operation
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
            Our infrastructure is architected specifically for high-volume media
            processing, sustained compute workloads, and parallel batch
            operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {characteristics.map((char, idx) => (
            <div
              key={idx}
              className="p-8 text-center border-x border-stone-100 first:border-l-0 last:border-r-0 border-t md:border-t-0 pt-8 md:pt-0"
            >
              <div className="text-4xl mb-6">{char.icon}</div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mb-6">
                {char.title}
              </h3>
              <ul className="space-y-3 inline-block text-left">
                {char.points.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="text-sm text-stone-600 font-light list-disc"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemCharacteristics;
