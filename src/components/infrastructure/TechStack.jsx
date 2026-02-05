import React from "react";
import { Cpu, Cloud, Server, Box } from "lucide-react";

const TechCard = ({ icon: Icon, title, description, details }) => (
  <div className="bg-white p-8 rounded-2xl border border-stone-100 hover:border-orange-100 transition-colors group">
    <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
      <Icon className="w-6 h-6 text-stone-600 group-hover:text-orange-500 transition-colors" />
    </div>
    <h3 className="text-xl font-serif font-medium text-stone-900 mb-4">
      {title}
    </h3>
    <p className="text-stone-600 mb-6 text-sm leading-relaxed min-h-[60px]">
      {description}
    </p>
    <div className="space-y-2 pt-6 border-t border-stone-50">
      <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
        Key Benefits
      </h4>
      {details.map((detail, idx) => (
        <div
          key={idx}
          className="flex items-start gap-2 text-sm text-stone-600"
        >
          <div className="w-1 h-1 rounded-full bg-orange-500 mt-2" />
          <span>{detail}</span>
        </div>
      ))}
    </div>
  </div>
);

const TechStack = () => {
  const technologies = [
    {
      icon: Box, // Kubernetes
      title: "Google Kubernetes Engine (GKE)",
      description:
        "All media processing microservices run in containerized environments orchestrated by Kubernetes for automatic scaling.",
      details: [
        "Scale from 10 to 500+ pods automatically",
        "Zero-downtime rolling updates",
        "Self-healing infrastructure",
        "Multi-zone high availability",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Run",
      description:
        "Serverless compute for API endpoints, webhook handlers, and event-driven workloads requiring instant scaling.",
      details: [
        "Automatic API request scaling",
        "Zero infrastructure management",
        "Optimized for lightweight tasks",
        "Pay-per-use efficiency",
      ],
    },
    {
      icon: Cpu,
      title: "Compute Engine with GPUs",
      description:
        "Virtual machines with attached GPUs for intensive AI inference workloads including voice synthesis and rendering.",
      details: [
        "GPU-accelerated synthesis (10x speeds)",
        "Preemptible instances (80% cost savings)",
        "Custom AI model inference",
        "Parallel batch optimization",
      ],
    },
    {
      icon: Server,
      title: "Global Cloud Architecture",
      description:
        "Built entirely on Google Cloud Platform (GCP) leveraging enterprise-grade managed services.",
      details: [
        "Superior AI/ML capabilities",
        "Global network performance",
        "Enterprise security & compliance",
        "Managed platform reliability",
      ],
    },
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-orange-600 font-medium tracking-wider text-sm uppercase mb-3 block">
            Cloud Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-6">
            Built on Google Cloud Platform
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl">
            We leverage managed services that provide enterprise-grade
            reliability while allowing our team to focus on AI innovation rather
            than maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <TechCard key={index} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
