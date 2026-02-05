import React from "react";
import { Terminal, Box, FileCode } from "lucide-react";

const SDKCard = ({ title, description, installCmd, features }) => (
  <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all group">
    <h3 className="text-xl font-serif font-medium text-stone-900 mb-4 flex items-center gap-2">
      <Box className="w-5 h-5 text-stone-500" />
      {title}
    </h3>
    <p className="text-stone-600 mb-6 text-sm min-h-[40px]">{description}</p>

    <div className="bg-stone-900 rounded-lg p-3 mb-6 flex items-center justify-between group-hover:bg-stone-800 transition-colors">
      <code className="text-xs font-mono text-stone-300">{installCmd}</code>
      <Terminal className="w-4 h-4 text-stone-600" />
    </div>

    <ul className="space-y-2">
      {features.map((feat, i) => (
        <li key={i} className="flex items-center gap-2 text-xs text-stone-500">
          <div className="w-1 h-1 bg-stone-400 rounded-full" />
          {feat}
        </li>
      ))}
    </ul>
  </div>
);

const DevSDKs = () => {
  const sdks = [
    {
      title: "Node.js / JavaScript",
      description:
        "Full-featured SDK for Node.js backend and build tools with TypeScript support.",
      installCmd: "npm install @linguacore/sdk",
      features: [
        "Promise-based API",
        "TypeScript support",
        "Automatic retry logic",
        "Webhook verification",
      ],
    },
    {
      title: "Python",
      description:
        "Pythonic SDK with async support for AI data pipelines and notebooks.",
      installCmd: "pip install linguacore",
      features: [
        "Async/Await clients",
        "Pandas integration",
        "Type hints",
        "Jupyter support",
      ],
    },
    {
      title: "PHP",
      description: "Laravel-friendly PHP SDK optimized for CMS integrations.",
      installCmd: "composer require linguacore/sdk",
      features: [
        "PSR-4 autoloading",
        "Laravel provider",
        "WordPress compatible",
        "Guzzle client",
      ],
    },
    {
      title: "Java",
      description: "Enterprise-ready Java SDK for large-scale media platforms.",
      installCmd: "mvn dependency:get ...",
      features: [
        "Java 8+ compatibility",
        "Spring Boot integration",
        "Thread-safe",
        "Media handling",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-stone-500 font-medium tracking-wider text-sm uppercase mb-3 block">
            SDKs & Libraries
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-6">
            Official SDKs
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Accelerate your integration with our official libraries, featuring
            type safety, automatic retries, and comprehensive error handling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sdks.map((sdk, idx) => (
            <SDKCard key={idx} {...sdk} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevSDKs;
