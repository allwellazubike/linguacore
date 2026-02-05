import React from "react";
import {
  PlayCircle,
  Video,
  MessageCircle,
  Clock,
  GitMerge,
  Radio,
} from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, benefits }) => (
  <div className="bg-white p-8 rounded-2xl border border-stone-100 h-full">
    <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center mb-6 text-stone-900">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-serif font-medium text-stone-900 mb-4">
      {title}
    </h3>
    <p className="text-stone-600 mb-6 text-sm">{description}</p>
    <ul className="space-y-2">
      {benefits.map((benefit, i) => (
        <li key={i} className="flex items-center gap-2 text-xs text-stone-500">
          <div className="w-1 h-1 bg-orange-400 rounded-full" />
          {benefit}
        </li>
      ))}
    </ul>
  </div>
);

const MediaServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-orange-600 font-medium tracking-wider text-sm uppercase mb-3 block">
              Orchestration
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 mb-4">
              Media Services & Workflow
            </h2>
            <p className="text-lg text-stone-600">
              Proprietary orchestration layer managing complex multi-step
              processing pipelines.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Video}
            title="Transcoder API"
            description="Managed video transcoding service for format conversion, resolution scaling, and optimization."
            benefits={[
              "Format normalization",
              "Adaptive bitrate optimization",
              "Audio extraction",
            ]}
          />
          <ServiceCard
            icon={PlayCircle} // Visual Intelligence
            title="Video Intelligence"
            description="Advanced video analysis for content understanding, scene detection, and metadata extraction."
            benefits={[
              "Scene change detection",
              "Content moderation",
              "Speech detection regions",
            ]}
          />
          <ServiceCard
            icon={Radio} // Pub/Sub
            title="Cloud Pub/Sub"
            description="Asynchronous messaging system for job orchestration and event streaming."
            benefits={[
              "Decoupled microservices",
              "Guaranteed message delivery",
              "Scalable job queues",
            ]}
          />
          <ServiceCard
            icon={Clock} // Tasks
            title="Cloud Tasks"
            description="Task queue for scheduled jobs, retry logic, and background processing management."
            benefits={[
              "Rate-limiting control",
              "Automatic retry logic",
              "Scheduled dispatch",
            ]}
          />
          <ServiceCard
            icon={GitMerge} // Workflows
            title="Cloud Workflows"
            description="Serverless workflow orchestration for complex multi-step processing pipelines."
            benefits={[
              "Error handling & recovery",
              "Conditional processing",
              "Parallel step execution",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default MediaServices;
