import React from "react";

const Technology = () => {
  return (
    <section className="py-24 bg-[#FAFAF9] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2 block">
            The Technology
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 mb-6">
            LinguaCore AI Platform
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            LinguaCore AI is a cloud-native AI media localization platform
            providing automated dubbing pipelines, RESTful APIs, and official
            SDKs. It is built as a complete media processing infrastructure, not
            a feature add-on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-medium text-stone-900 border-l-2 border-stone-900 pl-4">
              Cloud-Native Architecture
            </h3>
            <p className="text-stone-600 font-light text-sm leading-relaxed">
              Built entirely on managed cloud services for automatic elasticity,
              massive parallel processing capability, and global content
              delivery without infrastructure management overhead.
            </p>
            <ul className="space-y-3">
              {[
                "Multi-region processing for low latency",
                "Automatic scaling based on content volume",
                "Distributed rendering for fast turnaround",
                "Infrastructure-as-code for reliability",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-stone-700 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-medium text-stone-900 border-l-2 border-stone-900 pl-4">
              Real-Time Processing
            </h3>
            <p className="text-stone-600 font-light text-sm leading-relaxed">
              Always-on AI models handling audio transcription, translation, and
              voice synthesis at scale with optimized inference pipelines for
              cost-effective processing.
            </p>
            <ul className="space-y-3">
              {[
                "Sub-30-minute processing for 10-minute videos",
                "Parallel batch processing",
                "GPU-accelerated voice synthesis",
                "Intelligent job scheduling",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-stone-700 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-medium text-stone-900 border-l-2 border-stone-900 pl-4">
              Secure by Default
            </h3>
            <p className="text-stone-600 font-light text-sm leading-relaxed">
              Enterprise-grade security with encrypted content storage, secure
              API authentication, role-based access controls, and comprehensive
              processing audit logs.
            </p>
            <ul className="space-y-3">
              {[
                "End-to-end encryption",
                "SOC 2 Type II compliance pathway",
                "Content deletion policies",
                "Regular security audits",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-stone-700 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
