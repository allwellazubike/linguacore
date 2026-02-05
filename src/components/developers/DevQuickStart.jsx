import React from "react";
import { Key, Package, Upload, Webhook } from "lucide-react";

const StepCard = ({ number, icon: Icon, title, description }) => (
  <div className="relative pl-8 md:pl-0">
    {/* Mobile Number/Line */}
    <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-stone-200"></div>
    <div className="md:hidden absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-stone-900"></div>

    <div className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-all h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-stone-50 rounded-lg flex items-center justify-center text-stone-900">
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
          Step {number}
        </span>
      </div>
      <h3 className="text-lg font-serif font-medium text-stone-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-stone-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const DevQuickStart = () => {
  const steps = [
    {
      icon: Key,
      title: "Get Your API Key",
      description:
        "Sign up for a free account and generate your API credentials from the developer dashboard.",
    },
    {
      icon: Package,
      title: "Install SDK",
      description:
        "Choose your preferred programming language and install our official SDK to simplify integration.",
    },
    {
      icon: Upload,
      title: "Upload First Content",
      description:
        "Make your first API call to upload audio/video content and initiate localization processing.",
    },
    {
      icon: Webhook,
      title: "Configure Webhooks",
      description:
        "Set up webhook endpoints to receive real-time processing status updates and completion notifications.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12">
          <div>
            <span className="text-stone-500 font-medium tracking-wider text-sm uppercase mb-3 block">
              Quick Start
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900">
              Get Started in Minutes
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <StepCard key={index} number={index + 1} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevQuickStart;
