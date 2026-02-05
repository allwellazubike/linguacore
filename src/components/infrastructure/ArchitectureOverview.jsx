import React from "react";
import { ArrowRight, Database, Mic, Globe, Cpu, Layers } from "lucide-react";

const PipelineStep = ({ icon: Icon, title, description, step }) => (
  <div className="relative group">
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-stone-400 group-hover:bg-stone-50 transition-colors z-10 relative">
        <Icon className="w-8 h-8 text-stone-600 group-hover:text-stone-900 transition-colors" />
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-sm font-medium border-4 border-stone-50">
          {step}
        </div>
      </div>
      <h3 className="text-lg font-serif font-medium text-stone-900 mb-3">
        {title}
      </h3>
      <p className="text-sm text-stone-600 leading-relaxed max-w-[200px]">
        {description}
      </p>
    </div>
  </div>
);

const ArchitectureOverview = () => {
  const steps = [
    {
      icon: Globe,
      title: "API Gateway",
      description:
        "Secure entry point managing auth, routing, and upload handling.",
    },
    {
      icon: Layers,
      title: "Ingestion Pipeline",
      description: "High-throughput validation, queuing, and workflow routing.",
    },
    {
      icon: Mic,
      title: "Speech Engine",
      description: "Timestamp-accurate transcription & speaker identification.",
    },
    {
      icon: Globe, // Contextual Translation
      title: "Translation Layer",
      description:
        "Neural translation preserving context and cultural nuances.",
    },
    {
      icon: Mic, // Synthesis
      title: "Voice Synthesis",
      description: "Neural voice generation with emotion and style control.",
    },
    {
      icon: Cpu, // Rendering
      title: "Media Assembly",
      description: "Lip-sync alignment and final video rendering.",
    },
    {
      icon: Database,
      title: "Global Delivery",
      description: "Distributed storage & CDN delivery of localized content.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-6">
            Platform Architecture Design
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            LinguaCore AI operates as a distributed media processing pipeline
            orchestrated for seamless content localization.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-8 left-0 w-full h-0.5 bg-stone-100 hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <PipelineStep key={index} {...step} step={index + 1} />
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 rounded-2xl bg-stone-50 border border-stone-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-serif font-medium text-stone-900 mb-4">
              Orchestrated by Kubernetes
            </h3>
            <p className="text-stone-600 mb-6">
              All microservices run in containerized environments for automatic
              scaling, self-healing infrastructure, and zero-downtime
              deployments.
            </p>
            <ul className="space-y-2">
              {[
                "Automatic horizontal scaling based on queue depth",
                "Self-healing infrastructure with pod replacement",
                "Multi-zone deployment for high availability",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-stone-600 text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3 aspect-video bg-white rounded-xl border border-stone-200 shadow-sm flex items-center justify-center p-6">
            <code className="text-xs text-stone-500 font-mono">
              <span className="text-stone-900 font-bold">apiVersion:</span>{" "}
              apps/v1
              <br />
              <span className="text-stone-900 font-bold">kind:</span> Deployment
              <br />
              <span className="text-stone-900">metadata:</span>
              <br />
              &nbsp;&nbsp;name: linguacore-engine
              <br />
              <span className="text-stone-900">spec:</span>
              <br />
              &nbsp;&nbsp;replicas: 50 - 500 (auto)
              <br />
              &nbsp;&nbsp;selector:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;matchLabels:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;app: engine
              <br />
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureOverview;
