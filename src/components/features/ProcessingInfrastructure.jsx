import React from "react";

const ProcessingInfrastructure = () => {
  const sections = [
    {
      title: "Batch Processing Infrastructure",
      description:
        "Process entire media libraries simultaneously with intelligent job scheduling, parallel rendering, and progress tracking.",
      details: [
        "Upload up to 1,000 videos simultaneously",
        "Parallel processing across multiple languages",
        "Intelligent queue management",
        "Real-time progress dashboards",
      ],
      sideNote: "100 hours batch processed in 24-48 hours (parallel)",
    },
    {
      title: "Developer API Infrastructure",
      description:
        "Complete API-first architecture for seamless integration into existing media workflows, content management systems, and production pipelines.",
      details: [
        "RESTful architecture & Webhook notifications",
        "Real-time processing status",
        "Official SDKs (Python, Node.js, PHP, Java)",
        "S3-compatible storage integration",
      ],
      sideNote: "Comprehensive documentation & Sandbox environment",
    },
    {
      title: "Content Management Dashboard",
      description:
        "Web-based interface for content upload, processing management, quality review, and localized content delivery.",
      details: [
        "Drag-and-drop content upload",
        "Quality preview and review",
        "Subtitle & Translation editors",
        "User access controls & Usage analytics",
      ],
    },
    {
      title: "Quality Assurance Tools",
      description:
        "Built-in quality monitoring, human review workflows, and editing capabilities ensuring professional-grade output.",
      details: [
        "Automatic quality scoring",
        "Side-by-side comparison (original vs. dubbed)",
        "Human review workflows",
        "Correction and re-processing loops",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAF9] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-stone-900 mb-4">
                {section.title}
              </h3>
              <p className="text-stone-600 mb-6 font-light leading-relaxed">
                {section.description}
              </p>
              <div className="bg-white p-6 rounded-sm border border-stone-100 shadow-sm grow">
                <ul className="space-y-3">
                  {section.details.map((detail, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-start gap-3 text-sm text-stone-700 font-medium"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
                {section.sideNote && (
                  <div className="mt-6 pt-4 border-t border-stone-100 text-xs font-bold uppercase tracking-wider text-stone-400">
                    {section.sideNote}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessingInfrastructure;
